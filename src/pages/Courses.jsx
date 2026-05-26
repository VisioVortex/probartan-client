const courses = [
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "SSC Batch",
  "HSC Batch",
];

function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {course}
            </h2>

            <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg">
              ভর্তি হোন
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Courses;