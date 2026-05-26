import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

function StudentRoutine() {

  const { user } = useContext(AuthContext);

  const [routine, setRoutine] = useState([]);
  const [batch, setBatch] = useState(null);

  // 🔹 Step 1: Get student batch
  useEffect(() => {

    if (user?.email) {

      axios
        .get(`http://localhost:5000/users/${user.email}`)
        .then((res) => {

          if (res.data?.batch) {
            setBatch(res.data.batch);
          }

        });

    }

  }, [user]);

  // 🔹 Step 2: Get routine using batch
  useEffect(() => {

    if (batch) {

      axios
        .get(`http://localhost:5000/routine/${batch}`)
        .then((res) => {
          setRoutine(res.data);
        });

    }

  }, [batch]);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Routine
      </h1>

      <div className="bg-white p-6 rounded shadow">

        {batch ? (
          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th>Day</th>
                <th>Subject</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>

              {routine.map((item, index) => (

                <tr key={index} className="text-center border-b">

                  <td>{item.day}</td>
                  <td>{item.subject}</td>
                  <td>{item.time}</td>

                </tr>

              ))}

            </tbody>

          </table>
        ) : (
          <p>Loading routine...</p>
        )}

      </div>

    </div>
  );
}

export default StudentRoutine;