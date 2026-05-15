export const revalidate = 0;
import { client } from './lib/sanity';
import Link from 'next/link';

async function getProducts() {

  const query = `*[_type == "product"][0...3]{
  _id,
  name,
  slug,
  category,
  price,
  description,
  "imageUrl": images[0].asset->url
}`;

  return await client.fetch(query);
}

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-blue-700 text-white py-24 px-10">

        <div className="max-w-5xl">

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Advanced Robotics for the Future of Industry
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-3xl">
            Precision-engineered automation solutions designed for
            manufacturing, logistics, AI surveillance, and industrial innovation.
          </p>

          <div className="flex gap-5">

            <Link href="/products">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
                View Products
              </button>
            </Link>

            <button className="border border-white px-8 py-4 rounded-lg">
              Request Quote
            </button>

          </div>

        </div>

      </section>

      <section className="py-20 px-10">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              AI Powered
            </h3>

            <p className="text-gray-600">
              Advanced machine learning automation systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              High Performance
            </h3>

            <p className="text-gray-600">
              Optimized robotics for industrial precision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Reliable & Safe
            </h3>

            <p className="text-gray-600">
              Built with enterprise-grade security and reliability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              Smart Integration
            </h3>

            <p className="text-gray-600">
              Easy integration with existing infrastructure.
            </p>
          </div>

        </div>

      </section>

      <section className="px-10 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold mb-5">
            Featured Products
          </h2>

          <p className="text-gray-600">
            Explore our most advanced robotics solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-2xl shadow hover:shadow-2xl overflow-hidden transition"
            >

              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <p className="text-blue-600 text-sm font-medium mb-2">
                  {product.category}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-5">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">

                  <p className="text-2xl font-bold text-blue-700">
                    ₹ {product.price}
                  </p>

                  <Link href={`/products/${product.slug.current}`}>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg">
                      View Details
                    </button>
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <Link href="/products">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg">
              View All Products
            </button>
          </Link>

        </div>

      </section>


      <section className="bg-blue-700 text-white py-20 text-center px-10">

        <h2 className="text-5xl font-bold mb-6">
          Ready to Automate Your Operations?
        </h2>

        <p className="text-xl text-gray-200 mb-10">
          Let our robotics solutions transform your business.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
          Get Started
        </button>

      </section>

    </div>
  );
}