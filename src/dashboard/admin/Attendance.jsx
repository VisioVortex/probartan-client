import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

function Attendance() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/students")
      .then((res) => {

        setStudents(res.data);

      });

  }, []);

  const handleAttendance = async (
    student,
    status
  ) => {

    const attendanceInfo = {
      studentId: student._id,
      studentName: student.name,
      batch: student.batch,
      status,
      date: new Date().toLocaleDateString(),
    };

    try {

      await axios.post(
        "http://localhost:5000/attendance",
        attendanceInfo
      );

      toast.success(
        `${student.name} marked ${status}`
      );

    }

    catch (error) {
        console.log(error);

      toast.error("Attendance failed");

    }

  };

  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Attendance System
      </h1>

      <div className="bg-white shadow rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Batch
              </th>

              <th className="p-4 text-left">
                Attendance
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student._id}
                className="border-b"
              >

                <td className="p-4">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.batch}
                </td>

                <td className="p-4 flex gap-3">

                  <button
                    onClick={() =>
                      handleAttendance(
                        student,
                        "Present"
                      )
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Present
                  </button>

                  <button
                    onClick={() =>
                      handleAttendance(
                        student,
                        "Absent"
                      )
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Absent
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Attendance;