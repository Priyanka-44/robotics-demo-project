import Link from 'next/link';

export default function AboutPage() {

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-700 text-white py-24 px-10 text-center">

        <h1 className="text-7xl font-bold mb-6">
          About RoboXcel
        </h1>

        <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-10">
          Building the future of robotics, automation, and AI-powered
          industrial innovation with scalable technology solutions.
        </p>

      </section>


      {/* COMPANY INTRO */}
      <section className="px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Revolutionizing Industries Through Smart Robotics
            </h2>

            <p className="text-gray-600 text-xl leading-9 mb-8">
              RoboXcel is a technology-focused robotics company
              specializing in AI automation, industrial robotics,
              surveillance systems, warehouse automation, and
              intelligent robotics infrastructure.
            </p>

            <p className="text-gray-600 text-xl leading-9 mb-10">
              Our mission is to deliver scalable robotics
              solutions that improve operational efficiency,
              automation, safety, and digital transformation
              for modern industries.
            </p>


            <Link href="/products">

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
                Explore Products
              </button>

            </Link>

          </div>


          {/* RIGHT */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl">

            <div className="grid grid-cols-2 gap-8">

              <div className="text-center">

                <h3 className="text-5xl font-bold text-blue-700 mb-3">
                  50+
                </h3>

                <p className="text-gray-600 text-lg">
                  Robotics Solutions
                </p>

              </div>


              <div className="text-center">

                <h3 className="text-5xl font-bold text-blue-700 mb-3">
                  25+
                </h3>

                <p className="text-gray-600 text-lg">
                  Industry Clients
                </p>

              </div>


              <div className="text-center">

                <h3 className="text-5xl font-bold text-blue-700 mb-3">
                  10+
                </h3>

                <p className="text-gray-600 text-lg">
                  AI Integrations
                </p>

              </div>


              <div className="text-center">

                <h3 className="text-5xl font-bold text-blue-700 mb-3">
                  99%
                </h3>

                <p className="text-gray-600 text-lg">
                  Automation Accuracy
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-10 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-6xl font-bold mb-6">
            What We Build
          </h2>

          <p className="text-gray-600 text-xl">
            Advanced robotics systems designed for modern businesses.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">


            <h3 className="text-3xl font-bold mb-4">
              AI Robotics
            </h3>

            <p className="text-gray-600 leading-8">
              Intelligent robotic systems powered by machine learning and automation.
            </p>

          </div>


          {/* CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">



            <h3 className="text-3xl font-bold mb-4">
              Drones
            </h3>

            <p className="text-gray-600 leading-8">
              Smart aerial robotics solutions for monitoring and surveillance.
            </p>

          </div>


          {/* CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <h3 className="text-3xl font-bold mb-4">
              Automation
            </h3>

            <p className="text-gray-600 leading-8">
              Industrial automation systems optimized for scalable operations.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">


            <h3 className="text-3xl font-bold mb-4">
              Smart Surveillance
            </h3>

            <p className="text-gray-600 leading-8">
              AI-powered surveillance infrastructure for modern security systems.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-700 text-white py-24 px-10 text-center">

        <h2 className="text-6xl font-bold mb-6">
          Ready To Transform Your Business?
        </h2>

        <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Connect with our robotics experts and explore scalable AI automation solutions.
        </p>

        <Link href="/contact">

          <button className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold">
            Contact Us
          </button>

        </Link>

      </section>

    </div>

  );
}