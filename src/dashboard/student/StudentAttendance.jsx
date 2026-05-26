import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

function StudentAttendance() {

  const { user } = useContext(AuthContext);

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {

    if (user?.email) {

      axios
        .get(
          `https://probartan-server.onrender.com/attendance/${user.email}`
        )
        .then((res) => {

          setAttendance(res.data);

        });

    }

  }, [user]);

  // Count stats
  const present = attendance.filter(
    (a) => a.status === "present"
  ).length;

  const absent = attendance.filter(
    (a) => a.status === "absent"
  ).length;

  const total = attendance.length;

  const percentage =
    total > 0 ? ((present / total) * 100).toFixed(2) : 0;

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Attendance
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-10">

        <div className="bg-white p-4 rounded shadow">
          Present: {present}
        </div>

        <div className="bg-white p-4 rounded shadow">
          Absent: {absent}
        </div>

        <div className="bg-white p-4 rounded shadow">
          Total: {total}
        </div>

        <div className="bg-white p-4 rounded shadow">
          {percentage}%
        </div>

      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded shadow">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {attendance.map((item, index) => (

              <tr key={index} className="text-center border-b">

                <td>{item.date}</td>

                <td
                  className={
                    item.status === "present"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {item.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentAttendance;