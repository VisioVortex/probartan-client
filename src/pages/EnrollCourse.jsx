import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import api from "../api/api";

function EnrollCourse() {

  const course = useLoaderData();

  const { user } = useContext(AuthContext);

  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const paymentInfo = {
      email: user.email,
      courseId: course._id,
      courseName: course.name,
      amount: course.price,
      transactionId,
      status: "Pending",
    };

    try {

      await api.post("/payments", paymentInfo);

      alert("Payment Submitted Successfully");

      setTransactionId("");

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-black text-blue-600 mb-8">
          Enroll In Course
        </h1>

        <h2 className="text-2xl font-bold">
          {course.name}
        </h2>

        <p className="mt-3 text-gray-600">
          Course Fee: ৳ {course.price}
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-2xl">

          <h3 className="text-xl font-bold mb-4">
            Payment Information
          </h3>

          <p>
            bKash Personal: 01XXXXXXXXX
          </p>

          <p>
            Nagad Personal: 01XXXXXXXXX
          </p>

          <p className="mt-3 font-bold">
            Amount: ৳ {course.price}
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >

          <input
            type="text"
            placeholder="Enter Transaction ID"
            value={transactionId}
            onChange={(e) =>
              setTransactionId(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
            required
          />

          <button
            type="submit"
            className="mt-5 w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            Submit Payment
          </button>

        </form>

      </div>

    </div>

  );
}

export default EnrollCourse;