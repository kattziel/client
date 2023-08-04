import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";

import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

//components
import Home from "./pages/Home";
import Nav from "./components/Nav";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
