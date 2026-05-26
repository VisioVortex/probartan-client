function StudentHome() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Attendance</h2>
          <p>85%</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Fees Due</h2>
          <p>৳2000</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">Classes Today</h2>
          <p>2 Classes</p>
        </div>

      </div>

    </div>
  );
}

export default StudentHome;