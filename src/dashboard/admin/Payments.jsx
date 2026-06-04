import { useEffect, useState } from "react";
import api from "../../api/api";

function Payments() {

  const [payments, setPayments] = useState([]);

  const fetchPayments = () => {

    api.get("/payments")
      .then((res) => {
        setPayments(res.data);
      });

  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleApprove = async (id) => {

    await api.patch(`/payments/${id}`);

    alert("Payment Approved");

    fetchPayments();

  };

  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Payment Requests
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4">Student Email</th>
              <th className="p-4">Course</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment._id}
                className="border-b"
              >

                <td className="p-4">
                  {payment.email}
                </td>

                <td className="p-4">
                  {payment.courseName}
                </td>

                <td className="p-4">
                  ৳ {payment.amount}
                </td>

                <td className="p-4">
                  {payment.transactionId}
                </td>

                <td className="p-4">
                  {payment.status}
                </td>

                <td className="p-4">

                  {
                    payment.status === "Pending" && (

                      <button
                        onClick={() =>
                          handleApprove(payment._id)
                        }
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>

                    )
                  }

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Payments;