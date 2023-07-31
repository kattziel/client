import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
  const [posts, setPosts] = useState([]);
  client
    .query({
      query: gql`
        {
          allPosts {
            id
            title
            description
          }
        }
      `,
    })
    .then((result) => setPosts(result.data.allPosts));

  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}
          <div>{post.description}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
