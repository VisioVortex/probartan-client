import {
  getAuth,
  signOut,
} from "firebase/auth";

import app from "../../firebase/firebase.config";

const auth = getAuth(app);

function DashboardNavbar() {

  const handleLogout = () => {

    signOut(auth)
      .then(() => {
        console.log("Logout Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });

  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        প্রবর্তন কোচিং সেন্টার
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default DashboardNavbar;