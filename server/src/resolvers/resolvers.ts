import {mergeResolvers} from "@graphql-tools/merge"
import {IResolvers} from "@graphql-tools/utils"

//import resolvers
import userResolvers from "./userResolvers";
import noteResolvers from "./noteResolvers";
import loginResolvers from "./loginResolvers";
import passwordResolvers from "./passwordResolvers";
import projectResolvers from "./projectResolvers";

const resolvers: IResolvers = mergeResolvers([
    userResolvers, noteResolvers, loginResolvers, passwordResolvers, projectResolvers
]);

export default resolvers
