import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body p-4">
              <h4 className="mb-4">Login</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter email"
                    disabled={loading}
                  />
                </div>
                <button
                  className="btn btn-primary mt-3"
                  disabled={!email || loading}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
    // <div className="container p-5">
    //   <div className="row p-5">
    //     <h4>Login</h4>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="form-control"
    //           placeholder="Enter email"
    //           disabled={loading}
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>
  // );
};

export default Login;
