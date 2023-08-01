import React, { useContext } from "react";
import { ApolloClient } from "@apollo/client";
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const GET_ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

  //access context and getting access to the state and dispatch
  const { state, dispatch } = useContext(AuthContext);

  //react router; history gives as a history object of a browser
  let navigate = useNavigate();

  if (loading) return <p className="p-5">Loading...</p>;
  if (error)
    return <p className="p-5">An error occurred, please try again later...</p>;

  const updateUserName = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "Katarzyna",
    });
  };

  return (
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.title}</h4>
                </div>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => fetchPosts()}
          className="btn-btn-raised btn-primary"
        >
          Fetch POSTS
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}
      <hr />
      <button className="btn btn-primary" onClick={updateUserName}>
        Change user name
      </button>
      <hr />
      {JSON.stringify(navigate)};
    </div>
  );
};

export default Home;
