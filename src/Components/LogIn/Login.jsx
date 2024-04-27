import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  // success message
  const [success, setSuccess] = useState("");
  // Error Message
  const [error, setError] = useState("");

  // Declare location and navigate because after login user can easily visit their location
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // succes and error message clear
    setSuccess("");
    setError("");

    userLogin(email, password)
      .then((userLogin) => {
        console.log(userLogin.user);
        setSuccess("login Successfully");
        toast.success("Successfully Login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Wrong Password");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex mt-5 gap-x-6">
              <button className="btn btn-outline">Google</button>
              <button className="btn btn-outline">Git Hub</button>
            </div>
            {success && (
              <p className="font-medium mt-3 text-green-500">{success}</p>
            )}
            {error && <p className="font-medium mt-3 text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-base font-semibold mt-4">
              Do You Have any Account? Please{" "}
              <Link to={"/register"}>
                <span className="text-red-600">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
