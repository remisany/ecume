import {IResolvers} from "@graphql-tools/utils"

//import constants
import token from "../constants/token";
import User from "../models/User";
import {IToken} from "../interfaces/tokenInterface";
import {GraphQLError} from "graphql";

const passwordResolvers: IResolvers = {
    Mutation: {
        forgot: async (_, data) => {
            try {
                //input: email
                //generate password
                //update password
                //hasChangePassword => false
                //send mail

                return {code: "202"}
            } catch {
                return {code: "500"}
            }
        },
        define: async (_, data, {token}) => {
            //input: token
            //update password
            //hasChangePassword => true
            //return new token
            console.log(token)

            try {
                //const decodedToken: IToken = token.verify(data.token)

                //const user = await User.findById(decodedToken.id)

                //console.log(user)

                //return {code: "203"}

                return {code: "202"}
            } catch {
                throw new GraphQLError('error', {
                    extensions: {
                        http: {status: 500},
                    },
                })
            }
        }
    }
};

export default passwordResolvers;
