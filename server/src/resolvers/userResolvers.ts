import {IResolvers} from "@graphql-tools/utils"
import ejs from "ejs"

//import types
import {UserResolvers} from "../types";

//Import models
import User from "../models/User";

//import constants
import crypto from "../constants/crypto";
import transporter from "../constants/transporter";
import generatePassword from "../constants/password";

const url = __dirname.replace("/resolvers", "")

const userResolvers: IResolvers<UserResolvers> = {
    Query: {
        getUser: async (_, {id}) => {
            try {
                return await User.findById(id)
            } catch (error) {
                throw error
            }
        },
    },
    Mutation: {
        createUser: async (_, {input}) => {
            try {
                const email = input.email.toLowerCase()
                const password = generatePassword()
                const existingUser = await User.findOne({email})

                if (existingUser) {
                    return {code: "203"}
                }

                await User.create({email: email, password: crypto.encrypt(password)})

                const template = await ejs.renderFile(url + "/templates/welcome.ejs", {password: password})

                const mail = {
                    from: "écume <remi.d.sany@gmail.com>",
                    to: email,
                    subject: "Bienvenue !",
                    html: template,
                }

                await transporter.sendMail(mail)

                return {code: "202"}
            } catch {
                return {code: "500"}
            }
        }
    }
};

export default userResolvers;

/*
updateUser: async (_, {input}) => {
            try {
                const {id, email, password} = input
                return await User.findByIdAndUpdate(id, {email, password}, {new: true})
            } catch (error) {
                console.error(`updateUser error : ${error}`)
                throw error
            }
        },
        deleteUser: async (_, {id}) => {
            try {
                return await User.findByIdAndRemove(id)
            } catch (error) {
                console.error(`deleteUser error : ${error}`)
                throw error
            }
        },
    }
 */
