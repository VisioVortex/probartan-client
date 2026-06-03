import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function CourseDetails() {

  const course = useLoaderData();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEnroll = () => {

    if (!user) {

      navigate("/register");

      return;

    }

    navigate(`/student/payment/${course._id}`);

  };

  return (

    <div className="bg-gray-50 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-bold">

              {course.category}

            </span>

            <h1 className="text-5xl lg:text-6xl font-black mt-8 leading-tight">
              {course.name}
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              {course.description}
            </p>

            <div className="flex gap-10 mt-10">

              <div>

                <p className="text-gray-500">
                  Duration
                </p>

                <h2 className="text-2xl font-bold">
                  {course.duration}
                </h2>

              </div>

              <div>

                <p className="text-gray-500">
                  Students
                </p>

                <h2 className="text-2xl font-bold">
                  1200+
                </h2>

              </div>

              <div>

                <p className="text-gray-500">
                  Classes
                </p>

                <h2 className="text-2xl font-bold">
                  50+
                </h2>

              </div>

            </div>

            <div className="mt-12 flex items-center gap-8">

              <h2 className="text-5xl font-black text-blue-600">
                ৳ {course.price}
              </h2>

              <button onClick={handleEnroll} className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-8 py-4 rounded-2xl font-bold text-lg">

                ভর্তি হোন

              </button>

            </div>

          </div>

          <div>

            <img
              src={course.image}
              alt=""
              className="rounded-[40px] shadow-2xl w-full"
            />

          </div>

        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="bg-white rounded-[40px] p-12 shadow-xl mt-24">

          <h2 className="text-4xl font-black mb-10">
            এই কোর্সে যা যা শিখবে
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {

              course.learning?.map((item, index) => (

                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl p-5 flex items-center gap-4"
                >

                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">

                    ✓

                  </div>

                  <p className="text-lg font-medium">
                    {item}
                  </p>

                </div>

              ))

            }

          </div>

        </div>

        {/* COURSE FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-[30px] p-10 shadow-lg">

            <h2 className="text-3xl font-black">
              লাইভ ক্লাস
            </h2>

            <p className="mt-5 text-gray-600">
              Zoom / Offline লাইভ ক্লাস সিস্টেম।
            </p>

          </div>

          <div className="bg-white rounded-[30px] p-10 shadow-lg">

            <h2 className="text-3xl font-black">
              এক্সাম
            </h2>

            <p className="mt-5 text-gray-600">
              Weekly Exam & Performance Tracking।
            </p>

          </div>

          <div className="bg-white rounded-[30px] p-10 shadow-lg">

            <h2 className="text-3xl font-black">
              সাপোর্ট
            </h2>

            <p className="mt-5 text-gray-600">
              শিক্ষক ও মেন্টর সাপোর্ট।
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default CourseDetails;