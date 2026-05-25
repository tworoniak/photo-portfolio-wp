import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WP_GRAPHQL_URL ?? "";

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});

export { gql } from "graphql-request";
