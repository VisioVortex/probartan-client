function StudentDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Live Classes
          </h2>

          <p className="mt-3 text-gray-600">
            Join upcoming online classes
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Assignments
          </h2>

          <p className="mt-3 text-gray-600">
            View homework and tasks
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Results
          </h2>

          <p className="mt-3 text-gray-600">
            Check exam results
          </p>
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;