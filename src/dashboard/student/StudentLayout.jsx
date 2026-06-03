import { Link, Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-5">

        <h1 className="text-2xl font-bold mb-10">
          Student Panel
        </h1>

        <ul className="space-y-4">

          <li>
            <Link to="/student">Dashboard</Link>
          </li>

          <li>
            <Link to="/student/profile">Profile</Link>
          </li>

          <li>
            <Link to="/student/attendance">Attendance</Link>
          </li>

          <li>
            <Link to="/student/fees">Fees</Link>
          </li>

          <li>
            <Link to="/student/payments">
              Payments
            </Link>
          </li>

          <li>
            <Link to="/student/my-courses">
              My Courses
            </Link>
          </li>

          <li>
            <Link to="/student/routine">Routine</Link>
          </li>

        </ul>

      </div>

      {/* Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
}

export default StudentLayout;