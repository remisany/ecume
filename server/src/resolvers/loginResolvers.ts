import {IResolvers} from "@graphql-tools/utils"
import {GraphQLError} from "graphql";

//Import models
import User from "../models/User";

//import constants
import crypto from "../constants/crypto";
import token from "../constants/token";

//import interfaces
import {IUser} from "../interfaces/userInterface";

const loginResolvers: IResolvers = {
    Mutation: {
        login: async (_, data) => {
            const email = crypto.decrypt(data.email).toLowerCase()
            const password = crypto.decrypt(data.password)

            try {
                const user: IUser | null = await User.findOne({email: email})

                if (!user) {
                    return {code: "203"}
                }

                if (crypto.decrypt(user.password) !== password) {
                    return {code: "203"}
                }

                return {code: "202", token: token.generate(user)}
            } catch {
                throw new GraphQLError('error', {extensions: {http: {status: 500}}})
            }
        }
    }
};

export default loginResolvers;
