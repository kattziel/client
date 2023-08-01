import React from "react";
import { ApolloClient } from "@apollo/client";
// import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import Home from "./pages/Home";
import Nav from "./components/Nav";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Home />
    </ApolloProvider>
  );
};

export default App;
