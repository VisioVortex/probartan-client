import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

function Home() {

  const [homepage, setHomepage] = useState(null);

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    api.get("/homepage")
      .then((res) => {
        setHomepage(res.data);
      });

    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
      });

  }, []);

  // if (!homepage) {

  //   return <h1 className="text-center py-40">Loading...</h1>;

  // }

  return (

    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-700 to-indigo-700 text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          <div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {homepage.heroTitle}
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-relaxed max-w-2xl">
              {homepage.heroSubtitle}
            </p>

            <button className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 duration-300">

              {homepage.heroButtonText}

            </button>

          </div>

          <div>

            <img
              src={homepage.heroImage}
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {homepage.stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-10 text-center shadow-lg"
            >

              <h2 className="text-5xl font-black text-blue-600">
                {item.number}
              </h2>

              <p className="mt-4 text-xl font-semibold text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-5 py-10">

        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-5xl font-black text-gray-800">
              জনপ্রিয় কোর্সসমূহ
            </h2>

            <p className="mt-4 text-gray-500 text-lg">
              বাংলাদেশের সেরা স্মার্ট কোচিং প্ল্যাটফর্ম
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {courses.map((course) => (

            <div
              key={course._id}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >

              <img
                src={course.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                {

                  course.featured && (

                    <span className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-bold">

                      Featured

                    </span>

                  )

                }

                <h2 className="text-3xl font-black mt-5">
                  {course.name}
                </h2>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-8">

                  <div>

                    <p className="text-3xl font-black text-blue-600">
                      ৳ {course.price}
                    </p>

                    <p className="text-gray-500 mt-1">
                      {course.duration}
                    </p>

                  </div>

                  <Link
                    to={`/course/${course._id}`}
                    className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-bold"
                  >

                    বিস্তারিত দেখুন

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-5 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            কেন প্রবর্তন কোচিং?
          </h2>

          <p className="mt-5 text-xl text-gray-500">
            আধুনিক শিক্ষা প্রযুক্তির মাধ্যমে স্মার্ট লার্নিং
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-10 rounded-[30px] shadow-lg">

            <h3 className="text-3xl font-black">
              লাইভ ক্লাস
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              অভিজ্ঞ শিক্ষকদের সাথে লাইভ অনলাইন ও অফলাইন ক্লাস।
            </p>

          </div>

          <div className="bg-white p-10 rounded-[30px] shadow-lg">

            <h3 className="text-3xl font-black">
              এক্সাম সিস্টেম
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              নিয়মিত পরীক্ষা ও পারফরমেন্স ট্র্যাকিং।
            </p>

          </div>

          <div className="bg-white p-10 rounded-[30px] shadow-lg">

            <h3 className="text-3xl font-black">
              স্মার্ট ড্যাশবোর্ড
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Attendance, Routine, Fees সব এক জায়গায়।
            </p>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;