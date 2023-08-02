import {mergeTypeDefs} from "@graphql-tools/merge"

//import schema
import userTypeDefs from "./userTypeDefs";
import noteTypeDefs from "./noteTypeDefs";
import loginTypeDefs from "./loginTypeDefs";
import passwordTypeDefs from "./passwordTypeDefs";
import projectTypeDefs from "./projectTypeDefs";

const typeDefs = mergeTypeDefs([
    userTypeDefs, loginTypeDefs, passwordTypeDefs, projectTypeDefs
]);

export default typeDefs;
