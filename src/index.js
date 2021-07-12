import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
const authToken =
  "G4Alg9HKEYhggvZFPARfmUbQppL54ll96xBzYPXKkdblO42D30vgZ2hBw17j9uph";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://a-react-todo-graphql.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": authToken,
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
