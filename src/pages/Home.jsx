import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {

  const [homeData, setHomeData] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {

    api.get("/homepage")
      .then((res) => {
        setHomeData(res.data);
      });

    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
      });

  }, []);

  return (
    <div className="bg-[#f5f7ff]">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-600 font-semibold mb-4">
              বাংলাদেশের স্মার্ট কোচিং প্ল্যাটফর্ম
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">

              {homeData?.heroTitle}

            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">

              {homeData?.heroSubtitle}

            </p>

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition-all text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">

              {homeData?.heroButtonText}

            </button>

          </div>

          <div>

            <img
              src={homeData?.heroImage}
              alt=""
              className="rounded-[40px] shadow-2xl h-150 w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {homeData?.stats?.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-xl text-center"
            >

              <h2 className="text-5xl font-black text-blue-600">

                {item.title}

              </h2>

              <p className="mt-4 text-gray-600 text-xl">

                {item.subtitle}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="flex justify-between items-center mb-12">

          <div>

            <p className="text-blue-600 font-semibold">
              Popular Courses
            </p>

            <h2 className="text-5xl font-black text-gray-900 mt-2">
              জনপ্রিয় ব্যাচসমূহ
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course._id}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={course.image}
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-gray-900">

                  {course.name}

                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">

                  {course.description}

                </p>

                <button className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-xl">

                  বিস্তারিত দেখুন

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;