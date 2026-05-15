import Link from 'next/link';
import ProductGallery from '../../../components/ProductGallery';
import { client } from '../../lib/sanity';

async function getProduct(slug) {

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    category,
    price,
    description,
    height,
    width,
    color,
    weight,
    payload,
    battery,
    connectivity,
    features,

    "images": images[]{
      asset->{
        url
      }
    }
  }`;

  return await client.fetch(query, { slug });
}

async function getRelatedProducts(category, currentId) {

  const query = `*[
    _type == "product" &&
    category == $category &&
    _id != $currentId
  ][0...3]{
    _id,
    name,
    slug,
    category,
    price,

    "imageUrl": images[0].asset->url
  }`;

  return await client.fetch(query, {
    category,
    currentId,
  });

}

export default async function ProductPage({ params }) {

  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {

    return (
      <div className="p-10 text-3xl font-bold">
        Product not found
      </div>
    );

  }

  const relatedProducts = await getRelatedProducts(
    product.category,
    product._id
  );

  return (
    <div className="bg-white min-h-screen">

      <div className="bg-blue-50 border-b border-blue-200">
        <div className="px-4 lg:px-8 xl:px-12 py-4">
          <Link href="/products">
            <span className="text-blue-600 hover:text-blue-700 font-medium">← Back to Products</span>
          </Link>
        </div>
      </div>

      
      <div className="px-4 lg:px-8 xl:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

         
          <div className="bg-blue-50 rounded-lg p-6">
            <ProductGallery
              images={product.images}
              name={product.name}
            />
          </div>

          <div>
            <div className="inline-block">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-blue-600 mb-6">
              ₹{product.price}
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-8">
              {product.description}
            </p>

            {product.color && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">Color</h3>
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-lg border border-gray-200">
                  <span className="font-medium text-gray-900">{product.color}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Request Quote
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Sales
              </button>
            </div>

      
            {product.features && product.features.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-y border-blue-200 py-16 md:py-20">
        <div className="px-4 lg:px-8 xl:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technical Specifications
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
            {[
              { 
                label: 'Height', 
                value: product.height 
              },
              { 
                label: 'Width', 
                value: product.width 
              },
              { 
                label: 'Weight', 
                value: product.weight 
              },
              { 
                label: 'Payload Capacity', 
                value: product.payload 
              },
              { 
                label: 'Battery Life', 
                value: product.battery 
              },
              { 
                label: 'Connectivity', 
                value: product.connectivity 
              },
            ].map((spec, idx) => (
              spec.value && (
                <div key={idx} className="bg-white p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">{spec.label}</h3>
                  <p className="text-2xl font-bold text-blue-600">{spec.value}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>


      {relatedProducts && relatedProducts.length > 0 && (
        <div className="px-4 lg:px-8 xl:px-12 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {relatedProducts.map((item) => (
              <Link key={item._id} href={`/products/${item.slug?.current}`}>
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="bg-blue-50 p-6 h-48 flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-semibold mb-4">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.name}
                    </h3>

                    <p className="text-2xl font-bold text-blue-600 mb-5">
                      ₹{item.price}
                    </p>

                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}