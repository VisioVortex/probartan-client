function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24">

        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            প্রবর্তন কোচিং সেন্টার
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            Smart Online & Offline Coaching Platform
            for School, SSC & HSC Students.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
            ভর্তি চলিতেছে
          </button>

        </div>

      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <h2 className="text-4xl font-bold text-center text-blue-600">
          জনপ্রিয় ব্যাচসমূহ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {[
            "Class 3-5",
            "Class 6-8",
            "SSC Batch",
            "HSC Batch",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-4 text-gray-600">
                Online & Offline Classes Available
              </p>

              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
                বিস্তারিত দেখুন
              </button>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;