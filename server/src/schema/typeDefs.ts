import {mergeTypeDefs} from "@graphql-tools/merge"

//import schema
import userTypeDefs from "./userTypeDefs";
import noteTypeDefs from "./noteTypeDefs";
import loginTypeDefs from "./loginTypeDefs";

const typeDefs = mergeTypeDefs([userTypeDefs, noteTypeDefs, loginTypeDefs]);

export default typeDefs;
