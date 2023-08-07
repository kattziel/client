import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailLink } from "firebase/auth";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailFormRegistration"));
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //validation
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    try {
        const result = await signInWithEmailLink(auth, email, window.location.href);
        // console.log(result);
        if (result.user.emailVerified) {
            // remove email from local storage
            window.localStorage.removeItem('emailForRegistration');
            let user = auth.currentUser;
            await user.updatePassword(password);

            // dispatch user with token and email
            // then redirect
        }
    } catch (error) {
        console.log('register complete error', error.message);
        setLoading(false);
        toast.error(error.message);
    }
};

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              {loading ? (
                <h4 className="text-danger">Loading...</h4>
              ) : (
                <h4 className="mb-4">Complete Registration</h4>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    placeholder={email}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder={"Enter password"}
                    disabled={loading}
                  />
                </div>
                <button
                  className="btn btn-primary mt-3"
                  disabled={!email || loading}
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

export default CompleteRegistration;

// const email = localStorage.getItem("email");

//   return (
//     <div className="container p-5">
//         {loading? (<h4 className="text-danger">Loading...</h4>) : (<h4>Complete registration</h4>)}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email address</label>
//           <input
//             type="email"
//             value={email}
//             className="form-control"
//             placeholder={email}
//             disabled={true}
//           />
//         </div>
//         <button
//           className="btn btn-raised btn-primary"
//           disabled={!email || loading}
//         //   onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
