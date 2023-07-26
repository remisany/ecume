import {mergeTypeDefs} from "@graphql-tools/merge"

//import schema
import userTypeDefs from "./userTypeDefs";
import noteTypeDefs from "./noteTypeDefs";
import loginTypeDefs from "./loginTypeDefs";
import passwordTypeDefs from "./passwordTypeDefs";

const typeDefs = mergeTypeDefs([
    userTypeDefs, noteTypeDefs, loginTypeDefs, passwordTypeDefs
]);

export default typeDefs;
