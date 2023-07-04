import {mergeTypeDefs} from "@graphql-tools/merge"

//import schema
import userTypeDefs from "./userTypeDefs";
import noteTypeDefs from "./noteTypeDefs";

const typeDefs = mergeTypeDefs([userTypeDefs, noteTypeDefs]);

export default typeDefs;
