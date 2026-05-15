export default function Footer() {

  return (

    <footer className="bg-gray-900 text-white px-10 py-16 mt-20">

      <div className="grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <h2 className="text-3xl font-bold text-blue-400 mb-5">
            RoboXcel
          </h2>

          <p className="text-gray-400 leading-7">
            Advanced robotics solutions powered by AI and automation.
          </p>

        </div>


        {/* LINKS */}
        <div>

          <h3 className="text-2xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>

          </ul>

        </div>


        {/* CATEGORIES */}
        <div>

          <h3 className="text-2xl font-bold mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>AI Robotics</li>
            <li>Drones</li>
            <li>Automation</li>
            <li>Warehouse Bots</li>

          </ul>

        </div>


        {/* CONTACT */}
        <div>

          <h3 className="text-2xl font-bold mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>info@roboxcel.com</li>
            <li>+91 9876543210</li>
            <li>Ahmedabad, Gujarat</li>

          </ul>

        </div>

      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">

        © 2026 RoboXcel. All rights reserved.

      </div>

    </footer>

  );
}