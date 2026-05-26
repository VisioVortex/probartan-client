function Courses() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Course Management
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow">

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Course Name"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Course Description"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
            Add Course
          </button>

        </form>

      </div>

    </div>
  );
}

export default Courses;