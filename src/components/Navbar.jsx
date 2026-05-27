import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Navbar() {

  const { user, logoutUser, role } =
    useContext(AuthContext);

  const handleLogout = () => {

    logoutUser();

  };

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-black text-blue-600"
        >
          প্রবর্তন
        </Link>

        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="flex items-center gap-4">

          {
            user ? (
              <>

                <Link
                  to={
                    role === "admin"
                      ? "/admin"
                      : role === "teacher"
                      ? "/teacher"
                      : "/student"
                  }
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl"
                >
                  Logout
                </button>

              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl"
                >
                  Login
                </Link>
              </>
            )
          }

        </div>

      </div>

    </nav>

  );
}

export default Navbar;