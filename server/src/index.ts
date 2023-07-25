import {ApolloServer, BaseContext} from "@apollo/server";
import dotenv from 'dotenv';
import * as mongoose from "mongoose";
import {startStandaloneServer} from "@apollo/server/standalone";

//import schema
import typeDefs from "./schema/typeDefs";

//import resolvers
import resolvers from "./resolvers/resolvers";
import token from "./constants/token";

dotenv.config()

const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
})

const mongoURL: string = process.env.MONGO_URL as string

mongoose.connect(mongoURL)
    .then(() => console.log("🕹 Connection successful"))
    .catch((err) => console.log(err))

startStandaloneServer(server, {
        listen: {port: 4000},
        context: async ({req}) => token.context(req)
    })
    .then(({url}) => console.log(`🚀 Server ready at: ${url}`))

/*
dotenv.config()
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

server.start().then(() => {
    const mongoURL: string = process.env.MONGO_URL as string

    mongoose.connect(mongoURL)
        .then(() => console.log("🕹 Connection successful"))
        .catch((err) => console.log(err))

    app.use(
        cors(),
        bodyParser.json(),
        expressMiddleware(server)
    )

    httpServer.listen({port: 4000}, () =>
        console.log(`🚀 Server ready at http://localhost:4000/graphql`)
    );
});
 */
