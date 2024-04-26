import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // success message
  const [success, setSuccess] = useState("");
  // error Message
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // success and error msg clear
    setSuccess("");
    setError("");

    // Password Validation
    if (password.length < 6) {
      setError("Password Should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Must have an Upper case letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Must have an lower case letter in the password");
      return;
    }

    // userCreate
    createUser(email, password)
      .then((userCreate) => {
        const user = userCreate.user;
        console.log(user);
        setSuccess("Account created SuccessFully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Already Use This Account");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
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
            {success && (
              <p className="font-medium mt-3 text-green-500">{success}</p>
            )}
            {error && <p className="font-medium mt-3 text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="mt-4 text-base font-semibold">
              Already Have an Account? Please{" "}
              <Link to={"/login"}>
                <span className="text-red-600">log in </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
