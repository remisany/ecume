import {ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {ServerParseError} from "@apollo/client/link/http/parseAndCheckHttpResponse";
import {onError} from "@apollo/client/link/error";

//import constants
import storageConstants from "../constants/storageConstants";
import toast from "../constants/toastConstants";

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

const errorLink = onError((error) => {
    const networkError = error.networkError as ServerParseError

    if (networkError) {
        if (networkError.response) {
            networkError.response.status === 401  && toast.error("Une erreur est survenue !", "Problème d'identification")
            networkError.response.status === 500  && toast.error("Une erreur est survenue !", "Problème serveur")
        }
    }
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(errorLink).concat(httpLink),
    cache: new InMemoryCache(),
})

export default apolloClient;
