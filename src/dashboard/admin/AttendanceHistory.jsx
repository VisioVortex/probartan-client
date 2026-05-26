import { useEffect, useState } from "react";

import axios from "axios";

function AttendanceHistory() {

  const [attendance, setAttendance] = useState([]);

  const [searchDate, setSearchDate] = useState("");

  const [selectedBatch, setSelectedBatch] =
    useState("");

  useEffect(() => {

    axios
      .get("https://probartan-server.onrender.com/attendance")
      .then((res) => {

        setAttendance(res.data);

      });

  }, []);

  const filteredAttendance = attendance.filter(
    (item) => {

      const matchDate =
        searchDate === ""
          ? true
          : item.date.includes(searchDate);

      const matchBatch =
        selectedBatch === ""
          ? true
          : item.batch === selectedBatch;

      return matchDate && matchBatch;

    }
  );

  return (

    <div>

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold text-blue-600">
          Attendance History
        </h1>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search Date"
            value={searchDate}
            onChange={(e) =>
              setSearchDate(e.target.value)
            }
            className="border p-3 rounded-lg"
          />

          <select
            value={selectedBatch}
            onChange={(e) =>
              setSelectedBatch(e.target.value)
            }
            className="border p-3 rounded-lg"
          >

            <option value="">
              All Batches
            </option>

            <option value="Class 3">
              Class 3
            </option>

            <option value="Class 4">
              Class 4
            </option>

            <option value="SSC Batch">
              SSC Batch
            </option>

            <option value="HSC Batch">
              HSC Batch
            </option>

          </select>

        </div>

      </div>

      <div className="bg-white shadow rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Student Name
              </th>

              <th className="p-4 text-left">
                Batch
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredAttendance.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-4">
                  {item.studentName}
                </td>

                <td className="p-4">
                  {item.batch}
                </td>

                <td className="p-4">

                  <span
                    className={`px-4 py-2 rounded-lg text-white ${
                      item.status === "Present"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4">
                  {item.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default AttendanceHistory;