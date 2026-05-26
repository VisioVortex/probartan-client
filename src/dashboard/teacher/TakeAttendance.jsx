import { useEffect, useState } from "react";
import axios from "axios";

function TakeAttendance() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        setStudents(res.data);
      });

  }, []);

  const handleAttendance = (email, status) => {

    const data = {
      email,
      status,
      date: new Date().toLocaleDateString(),
    };

    axios.post("http://localhost:5000/attendance", data)
      .then(() => {
        alert("Attendance saved");
      });

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Take Attendance
      </h1>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {students.map((s) => (

            <tr key={s._id} className="text-center border-b">

              <td>{s.name}</td>

              <td className="space-x-2">

                <button
                onClick={() => handleAttendance(s.email, "present")}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                Present
                </button>

                <button
                onClick={() => handleAttendance(s.email, "absent")}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                Absent
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TakeAttendance;