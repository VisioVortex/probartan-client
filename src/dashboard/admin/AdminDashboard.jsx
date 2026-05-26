function AdminDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            Total Students
          </h2>

          <p className="text-4xl mt-4 font-bold">
            520
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            Total Teachers
          </h2>

          <p className="text-4xl mt-4 font-bold">
            15
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            Running Batches
          </h2>

          <p className="text-4xl mt-4 font-bold">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            Monthly Revenue
          </h2>

          <p className="text-4xl mt-4 font-bold">
            ৳85K
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;