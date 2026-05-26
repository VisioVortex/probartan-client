import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {

    axios
      .get(`https://probartan-server.onrender.com/students/${id}`)
      .then((res) => {

        setStudent(res.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [id]);

  return (

    <div className="max-w-4xl mx-auto">

      <div className="bg-white shadow rounded-2xl p-10">

        <img
        src={student.image}
        alt=""
        className="w-40 h-40 rounded-full object-cover mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold text-blue-600 mb-10">
          Student Details
        </h1>

        <div className="space-y-5 text-xl">

          <p>
            <span className="font-bold">
              Name:
            </span>

            {" "}
            {student.name}
          </p>

          <p>
            <span className="font-bold">
              Email:
            </span>

            {" "}
            {student.email}
          </p>

          <p>
            <span className="font-bold">
              Batch:
            </span>

            {" "}
            {student.batch}
          </p>

          <p>
            <span className="font-bold">
              Student ID:
            </span>

            {" "}
            {student._id}
          </p>

        </div>

      </div>

    </div>

  );
}

export default StudentDetails;