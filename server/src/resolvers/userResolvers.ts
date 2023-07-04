import {IResolvers} from "@graphql-tools/utils"

const userResolvers: IResolvers = {
    Query: {
        users: () => {
        },
    },
    Mutation: {
        createUser: () => {
        },
    },
    User: {
        notes: () => {
        },
    },
};

export default userResolvers;
