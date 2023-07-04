import {ApolloServer} from "@apollo/server";

//import schema
import typeDefs from "./schema/typeDefs";

//import resolvers
import resolvers from "./resolvers/resolvers";
import {startStandaloneServer} from "@apollo/server/standalone";

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const startServer = async () => {
    return await startStandaloneServer(server, {
        listen: {port: 4000},
    });
}

startServer().then(({url}) => console.log(`🚀  Server ready at: ${url}`));
