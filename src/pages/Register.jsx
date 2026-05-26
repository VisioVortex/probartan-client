import { useState } from "react";

import { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../providers/AuthProvider";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    createUser(email, password)
      .then(() => {
        const userInfo = {
          email,
          role,
        };

        axios.post(
          "https://probartan-server.onrender.com/users",
          userInfo
        );
        setSuccess("Registration Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Register
        </h1>

        <form
          onSubmit={handleRegister}
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

          <select
            name="role"
            className="w-full border p-3 rounded-lg"
          >

            <option value="student">
              Student
            </option>

            <option value="teacher">
              Teacher
            </option>

          </select>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Register
          </button>

        </form>

        <p className="text-green-600 mt-4">
          {success}
        </p>

      </div>

    </div>
  );
}

export default Register;