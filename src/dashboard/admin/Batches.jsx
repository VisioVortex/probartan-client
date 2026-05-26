const batches = [
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "SSC Batch",
  "HSC Batch",
];

function Batches() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Batch Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {batches.map((batch, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {batch}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Batches;