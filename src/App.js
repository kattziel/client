import React from "react";
import { ApolloClient } from "@apollo/client";
// import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./pages/Home";
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
