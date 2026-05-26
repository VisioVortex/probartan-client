import { useEffect, useState } from "react";

import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AdminHome() {

  const [students, setStudents] = useState([]);

  const [attendance, setAttendance] =
    useState([]);

  const [fees, setFees] = useState([]);

  useEffect(() => {

    axios
      .get("https://probartan-server.onrender.com/students")
      .then((res) => {

        setStudents(res.data);

      });

    axios
      .get("https://probartan-server.onrender.com/attendance")
      .then((res) => {

        setAttendance(res.data);

      });

    axios
      .get("https://probartan-server.onrender.com/fees")
      .then((res) => {

        setFees(res.data);

      });

  }, []);

  const totalIncome = fees
    .filter((item) => item.status === "Paid")
    .reduce(
      (total, item) =>
        total + parseInt(item.amount),
      0
    );

  const paidCount = fees.filter(
    (item) => item.status === "Paid"
  ).length;

  const unpaidCount = fees.filter(
    (item) => item.status === "Unpaid"
  ).length;

  const chartData = [
    {
      name: "Students",
      total: students.length,
    },

    {
      name: "Attendance",
      total: attendance.length,
    },

    {
      name: "Paid",
      total: paidCount,
    },

    {
      name: "Unpaid",
      total: unpaidCount,
    },
  ];

  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-blue-500 text-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Total Students
          </h2>

          <p className="text-5xl mt-4 font-bold">
            {students.length}
          </p>

        </div>

        <div className="bg-green-500 text-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Total Income
          </h2>

          <p className="text-5xl mt-4 font-bold">
            ৳ {totalIncome}
          </p>

        </div>

        <div className="bg-yellow-500 text-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Paid Fees
          </h2>

          <p className="text-5xl mt-4 font-bold">
            {paidCount}
          </p>

        </div>

        <div className="bg-red-500 text-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Unpaid Fees
          </h2>

          <p className="text-5xl mt-4 font-bold">
            {unpaidCount}
          </p>

        </div>

      </div>

      <div className="bg-white p-8 rounded-2xl shadow">

        <h2 className="text-3xl font-bold mb-8">
          System Analytics
        </h2>

        <div className="w-full h-100">

          <ResponsiveContainer>

            <BarChart data={chartData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="total" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
}

export default AdminHome;