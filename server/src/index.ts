import {ApolloServer, BaseContext} from "@apollo/server";
import dotenv from 'dotenv';
import {startStandaloneServer} from "@apollo/server/standalone";
import * as mongoose from "mongoose";

//import schema
import typeDefs from "./schema/typeDefs";

//import resolvers
import resolvers from "./resolvers/resolvers";

dotenv.config()

const server = new ApolloServer<BaseContext>({typeDefs, resolvers})

const mongoURL: string = process.env.MONGO_URL as string

mongoose.connect(mongoURL)
    .then(() => console.log("🕹 Connection successful"))
    .catch((err) => console.log(err))

startStandaloneServer(server, {listen: {port: 4000}})
    .then(({url}) => console.log(`🚀 Server ready at: ${url}`))
