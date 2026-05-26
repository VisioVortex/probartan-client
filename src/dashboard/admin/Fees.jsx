import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

function Fees() {

  const [students, setStudents] = useState([]);

  const [fees, setFees] = useState([]);

  const [reload, setReload] = useState(false);

  useEffect(() => {

    axios
      .get("http://localhost:5000/students")
      .then((res) => {

        setStudents(res.data);

      });

    axios
      .get("http://localhost:5000/fees")
      .then((res) => {

        setFees(res.data);

      });

  }, [reload]);

  const handleFeesSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const studentId = form.student.value;

    const student = students.find(
      (item) => item._id === studentId
    );

    const month = form.month.value;

    const amount = form.amount.value;

    const status = form.status.value;

    const feesInfo = {
      studentId,
      studentName: student.name,
      batch: student.batch,
      month,
      amount,
      status,
      date: new Date().toLocaleDateString(),
    };

    try {

      await axios.post(
        "http://localhost:5000/fees",
        feesInfo
      );

      toast.success("Fees Added Successfully");

      form.reset();

      setReload(!reload);

    }

    catch (error) {
        console.log(error);
      toast.error("Failed To Add Fees");

    }

  };

  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Fees Management
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <form
          onSubmit={handleFeesSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-5"
        >

          <select
            name="student"
            className="border p-3 rounded-lg"
            required
          >

            <option value="">
              Select Student
            </option>

            {students.map((student) => (

              <option
                key={student._id}
                value={student._id}
              >
                {student.name}
              </option>

            ))}

          </select>

          <input
            type="text"
            name="month"
            placeholder="Month"
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            className="border p-3 rounded-lg"
            required
          />

          <select
            name="status"
            className="border p-3 rounded-lg"
            required
          >

            <option value="Paid">
              Paid
            </option>

            <option value="Unpaid">
              Unpaid
            </option>

          </select>

          <button
            className="bg-blue-600 text-white py-3 rounded-lg md:col-span-4"
          >
            Add Fees
          </button>

        </form>

      </div>

      <div className="bg-white shadow rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Batch
              </th>

              <th className="p-4 text-left">
                Month
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {fees.map((item) => (

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
                  {item.month}
                </td>

                <td className="p-4">
                  ৳ {item.amount}
                </td>

                <td className="p-4">

                  <span
                    className={`px-4 py-2 rounded-lg text-white ${
                      item.status === "Paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Fees;