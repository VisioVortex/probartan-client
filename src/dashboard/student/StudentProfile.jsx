import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function StudentProfile() {

  const { user, role } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Profile
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Batch:</strong> SSC Batch</p>

      </div>
    </div>
  );
}

export default StudentProfile;