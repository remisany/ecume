import type {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema/typeDefs.ts",
    require: ['ts-node/register'],
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};

export default config;
