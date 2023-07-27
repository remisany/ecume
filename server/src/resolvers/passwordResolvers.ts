import {IResolvers} from "@graphql-tools/utils"
import {GraphQLError} from "graphql";
import ejs from "ejs";

//import constants
import token from "../constants/token";

//import models
import User from "../models/User";

//import interfaces
import {IUser} from "../interfaces/userInterface";

//import constants
import transporter from "../constants/transporter";
import generatePassword from "../constants/password";
import crypto from "../constants/crypto";

const url = __dirname.replace("/resolvers", "")

const passwordResolvers: IResolvers = {
    Mutation: {
        forgot: async (_, data) => {
            try {
                const email = crypto.decrypt(data.email).toLowerCase()
                const password = generatePassword()

                const user: IUser | null = await User.findOneAndUpdate(
                    {email: email},
                    {$set: {password: crypto.encrypt(password), hasChangePassword: false}}
                ) as IUser | null

                if (user === null) {
                    return {code: "203"}
                }

                const template = await ejs.renderFile(url + "/templates/forgot.ejs", {password: password})

                const mail = {
                    from: "écume <remi.d.sany@gmail.com>",
                    to: email,
                    subject: "Votre mot de passe !",
                    html: template,
                }

                await transporter.sendMail(mail)

                return {code: "202"}
            } catch {
                throw new GraphQLError('error', {
                    extensions: {
                        http: {status: 500},
                    },
                })
            }
        },
        define: async (_, data, {authToken}) => {
            try {
                const user = await User.findByIdAndUpdate(authToken.id, {$set: {password: data.password, hasChangePassword: true}}) as IUser | null

                if (user !== null) {
                    const newUser: IUser = {
                        _id: user._id,
                        email: "",
                        password: "",
                        notes: [],
                        hasChangePassword: true
                    }

                    return {code: "202", token: token.generate(newUser)}
                }

                return {code: "203"}
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
