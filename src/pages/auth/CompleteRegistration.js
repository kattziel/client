import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

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
                    disabled={true}
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

export default CompleteRegistration;
