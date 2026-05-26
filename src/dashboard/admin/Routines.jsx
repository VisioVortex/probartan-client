function Routines() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Class Routines
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">Batch</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Time</th>
            </tr>

          </thead>

          <tbody>

            <tr className="border-b">
              <td className="p-4">SSC Batch</td>
              <td className="p-4">Mathematics</td>
              <td className="p-4">7:00 PM</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Routines;