import {IResolvers} from "@graphql-tools/utils"

//import types
import {UserResolvers} from "../types";

//Import models
import User from "../models/User";

const userResolvers: IResolvers<UserResolvers> = {
    Query: {
        getUser: async (_, {id}) => {
            try {
                return await User.findById(id)
            } catch (error) {
                console.error(`getUser error : ${error}`)
                throw error
            }
        },
    },
    Mutation: {
        createUser: async (_, {input}) => {
            try {
                const { email, password } = input
                return await User.create({email, password})
            } catch (error) {
                console.error(`createUser error : ${error}`)
                throw error
            }
        },
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
};

export default userResolvers;
