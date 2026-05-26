import { useEffect, useState } from "react";
import axios from "axios";

function TeacherStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios
      .get("https://probartan-server.onrender.com/students")
      .then((res) => {
        setStudents(res.data);
      });

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Students
      </h1>

      <table className="w-full bg-white rounded shadow">

            <thead className="bg-blue-500 text-white">
                <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Batch</th>
                </tr>
            </thead>

            <tbody>

                {students.map((s) => (

                <tr key={s._id} className="text-center border-b hover:bg-gray-100">

                    <td className="p-3">{s.name}</td>
                    <td className="p-3">{s.email}</td>
                    <td className="p-3">{s.batch}</td>

                </tr>

                ))}

            </tbody>

        </table>

    </div>
  );
}

export default TeacherStudents;