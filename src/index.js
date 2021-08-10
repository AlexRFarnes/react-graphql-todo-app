import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    // uri: "https://a-react-todo-graphql.herokuapp.com/v1/graphql",
    // Change location to env file
    uri: process.env.REACT_APP_ENDPOINT,
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_SECRET,
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
