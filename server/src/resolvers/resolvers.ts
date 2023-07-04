import {mergeResolvers} from "@graphql-tools/merge"
import {IResolvers} from "@graphql-tools/utils"

//import resolvers
import userResolvers from "./userResolvers";
import noteResolvers from "./noteResolvers";

const resolvers: IResolvers = mergeResolvers([userResolvers, noteResolvers]);

export default resolvers