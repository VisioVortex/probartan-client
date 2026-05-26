function TeacherDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600">
        Teacher Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Create Class
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Upload Notes
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Attendance
          </h2>
        </div>

      </div>

    </div>
  );
}

export default TeacherDashboard;