import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import api from "../../api/api";

function StudentPayments() {

  const { user } = useContext(AuthContext);

  const [payments, setPayments] = useState([]);

  useEffect(() => {

    if (user?.email) {

      api
        .get(`/payments/student/${user.email}`)
        .then((res) => {

          setPayments(res.data);

        });

    }

  }, [user]);

  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        My Payments
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Course
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Transaction ID
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment._id}
                className="border-b"
              >

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

                  <span
                    className={`px-4 py-2 rounded-lg text-white ${
                      payment.status === "Approved"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {payment.status}
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

export default StudentPayments;