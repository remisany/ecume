import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.REACT_APP_APOLLO_URL,
    cache: new InMemoryCache(),
})

export default apolloClient;
