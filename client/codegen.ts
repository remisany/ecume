import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: process.env.EXPO_PUBLIC_APOLLO_URL,
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
