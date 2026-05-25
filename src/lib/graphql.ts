import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WP_GRAPHQL_URL;
if (!endpoint) {
  throw new Error("WP_GRAPHQL_URL is not set. Add it to .env.local.");
}

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});

export { gql } from "graphql-request";
