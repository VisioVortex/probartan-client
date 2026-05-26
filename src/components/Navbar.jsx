import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

function Navbar() {
  const { user, logoutUser } =
  useContext(AuthContext);

  const handleLogout = () => {

    logoutUser()
      .then(() => {

        console.log("Logout Successful");

      })
      .catch((error) => {

        console.log(error.message);

      });

  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          প্রবর্তন কোচিং সেন্টার
        </h1>

        <div className="flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <div className="flex items-center gap-4">

            {

              user ?

              <>

                <p className="font-semibold text-blue-600">

                  {user.email}

                </p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg"
                >
                  Logout
                </button>

              </>

              :

              <>

                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                  Register
                </Link>

              </>

            }

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;