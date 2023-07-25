import {ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

//import constants
import storageConstants from "../constants/storageConstants";

const httpLink = createHttpLink({
    uri: process.env.EXPO_PUBLIC_APOLLO_URL
});

const authLink = setContext(async (_, { headers }) => {
    const token = await storageConstants.get();

    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    logLevel: 'debug'
})

export default apolloClient;
