import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-blue-700 text-white p-5">

      <h1 className="text-3xl font-bold mb-10">
        PCC Admin
      </h1>

      <div className="flex flex-col gap-3">

        <Link
          to="/admin"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/students"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Students
        </Link>

        <Link
          to="/admin/teachers"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Teachers
        </Link>

        <Link
          to="/admin/batches"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Batches
        </Link>

        <Link
          to="/admin/courses"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Courses
        </Link>

        <Link
          to="/admin/routines"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Routines
        </Link>

        <Link
          to="/admin/attendance"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Attendance
        </Link>
        <Link
          to="/admin/attendance-history"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Attendance History
        </Link>
        <Link
          to="/admin/fees"
          className="hover:bg-blue-800 p-3 rounded-lg"
        >
          Fees Management
        </Link>
        <Link to="/admin/add-routine" className="hover:bg-blue-800 p-3 rounded-lg"
        >Add Routine</Link>
      </div>

    </div>
  );
}

export default Sidebar;