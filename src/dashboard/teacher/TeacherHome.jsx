import { Link, Outlet } from "react-router-dom";

function TeacherHome() {

  return (

    <div className="flex min-h-screen">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6 space-y-4">

        <h1 className="text-2xl font-bold mb-6">
          Teacher Panel
        </h1>

        <Link
          to="/teacher"
          className="block hover:bg-blue-500 p-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/teacher/students"
          className="block hover:bg-blue-500 p-2 rounded"
        >
          Students
        </Link>

        <Link
          to="/teacher/attendance"
          className="block hover:bg-blue-500 p-2 rounded"
        >
          Take Attendance
        </Link>

      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 bg-gray-100 p-6">

        <Outlet />

      </div>

    </div>

  );
}

export default TeacherHome;