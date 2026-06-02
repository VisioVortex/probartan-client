import { useState, useContext } from "react";
import api from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";

function StudentFees() {

  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    courseName: "",
    amount: "",
    method: "bKash",
    transactionId: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const paymentData = {
      studentEmail: user?.email,
      courseName: formData.courseName,
      amount: formData.amount,
      method: formData.method,
      transactionId: formData.transactionId,
      status: "Pending",
      date: new Date(),
    };

    try {

      await api.post("/payments", paymentData);

      alert("Payment Request Submitted");

      setFormData({
        courseName: "",
        amount: "",
        method: "bKash",
        transactionId: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed To Submit Payment");

    }

  };

  return (

    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Course Payment
      </h1>

      <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-2xl mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Payment Instructions
        </h2>

        <p>
          bKash Number: 017XXXXXXXX
        </p>

        <p>
          Nagad Number: 018XXXXXXXX
        </p>

        <p className="mt-4 text-red-600 font-semibold">
          After payment submit your Transaction ID.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-2xl p-8 space-y-5"
      >

        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <select
          name="method"
          value={formData.method}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >

          <option value="bKash">
            bKash
          </option>

          <option value="Nagad">
            Nagad
          </option>

        </select>

        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          value={formData.transactionId}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Submit Payment
        </button>

      </form>

    </div>

  );
}

export default StudentFees;