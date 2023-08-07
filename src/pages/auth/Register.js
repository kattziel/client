import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDICRECT,
      handleCodeInApp: true,
    };
    const result = await auth.sendSignInLinkToEmail(email, config);
    console.log("result", result);

    // show notification to user about sent email
    toast.success(`Email is sent to ${email}. Click the link to complete your registration`);

    //save user's email to local storage
    window.localStorage.setItem("emailFormRegistration", email);

    //clear the state
    setEmail("");
    setLoading(false);
  };

//   return (
//     <div className="container p-5">
//       {loading ? (<h4>Loading...</h4>) : (<h4>Register</h4>)}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email address</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//             placeholder="Enter email"
//             disabled={loading}
//           />
//         </div>
//         <button
//           className="btn btn-raised btn-primary"
//           disabled={!email || loading}
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

return (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card p-4">
          <div className="card-body">
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              <h4 className="mb-4">Register</h4>
            )}
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
};

export default Register;
