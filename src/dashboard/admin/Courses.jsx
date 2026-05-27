import { useEffect, useState } from "react";
import api from "../../api/api";

function Courses() {

  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    duration: "",
    featured: false,
  });

  const fetchCourses = () => {

    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
      });

  };

  useEffect(() => {

    fetchCourses();

  }, []);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("/courses", formData)
      .then(() => {

        alert("Course Added");

        fetchCourses();

        setFormData({
          name: "",
          description: "",
          image: "",
          price: "",
          duration: "",
          featured: false,
        });

      });

  };

  return (

    <div>

      <h1 className="text-5xl font-black text-blue-600 mb-10">
        Course Management
      </h1>

      {/* ADD COURSE FORM */}
      <div className="bg-white p-10 rounded-[30px] shadow-xl mb-12">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="image"
            placeholder="Course Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="price"
            placeholder="Course Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="description"
            placeholder="Course Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-4 rounded-2xl md:col-span-2"
            rows="5"
          ></textarea>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

            Featured Course

          </label>

          <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold">

            Add Course

          </button>

        </form>

      </div>

      {/* COURSE LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {courses.map((course) => (

          <div
            key={course._id}
            className="bg-white rounded-[30px] overflow-hidden shadow-xl"
          >

            <img
              src={course.image}
              alt=""
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-black">
                {course.name}
              </h2>

              <p className="mt-4 text-gray-600">
                {course.description}
              </p>

              <div className="flex justify-between mt-6">

                <p className="font-bold text-blue-600">
                  ৳ {course.price}
                </p>

                <p className="font-semibold">
                  {course.duration}
                </p>

              </div>

              {
                course.featured && (

                  <span className="inline-block mt-5 bg-yellow-400 px-4 py-2 rounded-full text-sm font-bold">

                    Featured

                  </span>

                )
              }

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Courses;