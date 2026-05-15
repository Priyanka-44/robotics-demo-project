import Link from 'next/link';

export default function ResourcesPage() {

  const resources = [

    {
      title: 'Future of AI Robotics',
      type: 'Blog',
      description:
        'Explore how artificial intelligence is transforming modern robotics and industrial automation.',
    },

    {
      title: 'Industrial Automation 2026',
      type: 'Whitepaper',
      description:
        'A technical overview of scalable industrial automation systems and robotics infrastructure.',
    },

    {
      title: 'Warehouse Robotics Guide',
      type: 'PDF Guide',
      description:
        'Learn how warehouse robotics improves operational efficiency and inventory automation.',
    },

    {
      title: 'AI Surveillance Systems',
      type: 'Article',
      description:
        'Understand next-generation AI-powered surveillance systems for industrial environments.',
    },

    {
      title: 'Drone Monitoring Solutions',
      type: 'Case Study',
      description:
        'How drone automation is being used for large-scale monitoring and inspection systems.',
    },

    {
      title: 'Smart Factory Integration',
      type: 'Technical Resource',
      description:
        'Best practices for integrating robotics into smart manufacturing ecosystems.',
    },

  ];

  return (

    <div className="bg-gray-100 min-h-screen">

      <section className="bg-blue-700 text-white py-24 px-10 text-center">

        <h1 className="text-7xl font-bold mb-6">
          Resources
        </h1>

        <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-10">
          Explore blogs, whitepapers, guides, and technical resources
          related to robotics, AI automation, and industrial innovation.
        </p>

      </section>


      <section className="px-10 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {resources.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                {item.type}

              </span>


              <h2 className="text-3xl font-bold mt-6 mb-5 leading-tight">

                {item.title}

              </h2>


              <p className="text-gray-600 text-lg leading-8 mb-8">

                {item.description}

              </p>



              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold transition">

                Read More

              </button>

            </div>

          ))}

        </div>

      </section>


      <section className="bg-blue-700 text-white py-24 px-10 text-center">

        <h2 className="text-6xl font-bold mb-6">
          Need Custom Robotics Solutions?
        </h2>

        <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
          Connect with our experts to discuss AI automation,
          robotics infrastructure, and industrial innovation.
        </p>


        <Link href="/contact">

          <button className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold">

            Contact Our Team

          </button>

        </Link>

      </section>

    </div>

  );
}