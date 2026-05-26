import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Students() {

  const [students, setStudents] = useState([]);
  const [reload, setReload] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const filteredStudents = students.filter((student) => {

    const matchName = student.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchBatch =
      selectedBatch === ""
        ? true
        : student.batch === selectedBatch;

    return matchName && matchBatch;

  });
  const handleAddStudent = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const batch = form.batch.value;
    const image = form.image.files[0];

    const formData = new FormData();

      formData.append("file", image);

      formData.append(
        "upload_preset",
        "probartan_students"
      );

    try {

      const imageUpload = await axios.post(
        `https://api.cloudinary.com/v1_1/dfbmvwexs/image/upload`,
        formData
      );

      const imageURL = imageUpload.data.secure_url;

      const studentInfo = {
        name,
        email,
        batch,
        image: imageURL,
      };

      await axios.post(
        "https://probartan-server.onrender.com/students",
        studentInfo
      );

      toast.success("Student Added Successfully");

      form.reset();

      setReload(!reload);

    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");

    }

  };
  const handleDelete = async (id) => {

    try {

      const res = await axios.delete(
        `https://probartan-server.onrender.com/students/${id}`
      );
      console.log(res);
      toast.success("Student Deleted Successfully");

      setReload(!reload);

    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");

    }

  };
  const handleUpdateStudent = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const batch = form.batch.value;

    const updatedInfo = {
      name,
      email,
      batch,
    };

    try {

      const res = await axios.patch(
        `https://probartan-server.onrender.com/students/${editingStudent._id}`,
        updatedInfo
      );
      console.log(res);
      toast.success("Student Updated Successfully");

      setEditingStudent(null);

      setReload(!reload);

    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");

    }

  };
  useEffect(() => {

    axios
      .get("https://probartan-server.onrender.com/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [reload]);

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-blue-600">
          Students Management
        </h1>
        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search Student"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
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
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

  <h2 className="text-2xl font-bold mb-6">
    Add Student
  </h2>

  <form
        onSubmit={handleAddStudent}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Student Email"
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="file"
          name="image"
          className="border p-3 rounded-lg"
          required
        />

        <select
          name="batch"
          className="border p-3 rounded-lg"
          required
        >

          <option value="">
            Select Batch
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

        <button
          className="bg-blue-600 text-white py-3 rounded-lg md:col-span-3"
        >
          Add Student
        </button>

  </form>

</div>
      {
        editingStudent && (

          <div className="bg-yellow-100 p-8 rounded-2xl shadow mb-10">

            <h2 className="text-2xl font-bold mb-6">
              Update Student
            </h2>

            <form
              onSubmit={handleUpdateStudent}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >

              <input
                type="text"
                name="name"
                defaultValue={editingStudent.name}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                defaultValue={editingStudent.email}
                className="border p-3 rounded-lg"
                required
              />

              <select
                name="batch"
                defaultValue={editingStudent.batch}
                className="border p-3 rounded-lg"
                required
              >

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

              <button
                className="bg-yellow-500 text-white py-3 rounded-lg md:col-span-3"
              >
                Update Student
              </button>

            </form>

          </div>

        )
      }
      <div className="bg-white shadow rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Batch</th>
              <th className="p-4 text-left">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student) => (
              <tr
                key={student._id}
                className="border-b"
              >
                <td className="p-4">

                  <img
                    src={student.image}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />

                </td>
                <td className="p-4">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.email}
                </td>

                <td className="p-4">
                  {student.batch}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => setEditingStudent(student)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-3"
                  >
                    Edit
                  </button>
                  <Link
                    to={`/admin/students/${student._id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-3 inline-block"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students;