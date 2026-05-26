import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useEffect } from "react";




function Login() {
  const navigate = useNavigate();
  const { user, role, loading, signInUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  useEffect(() => {

    if (!loading && user && role) {

      if (role === "student") {
        navigate("/student");
      }

      else if (role === "teacher") {
        navigate("/teacher");
      }

      else if (role === "admin") {
        navigate("/admin");
      }

    }

  }, [user, role, loading, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
        .then(() => {

        setSuccess("Login Successful");

        const handleLogin = (e) => {
          e.preventDefault();

          const form = e.target;

          const email = form.email.value;
          const password = form.password.value;

          signInUser(email, password)
            .then(() => {
              setSuccess("Login Successful");
            })
            .catch((error) => {
              console.log(error.message);
            });
        };

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <p className="text-green-600 mt-4">
          {success}
        </p>

      </div>

    </div>
  );
}

export default Login;