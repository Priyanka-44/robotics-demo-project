'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '../lib/sanity';

export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  useEffect(() => {

    async function fetchProducts() {

      const query = `*[_type == "product"]{
        _id,
        name,
        slug,
        category,
        price,
        description,
       "imageUrl": images[0].asset->url
      }`;

      const data = await client.fetch(query);

      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = [
        'All',
        ...new Set(data.map((item) => item.category))
      ];

      setCategories(uniqueCategories);
    }

    fetchProducts();

  }, []);


  useEffect(() => {

    let updatedProducts = [...products];

    
    if (selectedCategory !== 'All') {
      updatedProducts = updatedProducts.filter(
        (item) => item.category === selectedCategory
      );
    }

  
    if (search) {
      updatedProducts = updatedProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

   
    if (sort === 'low') {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === 'high') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);

  }, [products, selectedCategory, search, sort]);


  return (
    <div className="bg-white min-h-screen">

     
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="px-4 lg:px-8 xl:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover advanced robotics solutions powered by AI and automation.
          </p>
        </div>
      </div>

    
      <div className="bg-blue-50 border-b border-blue-200 sticky top-0 z-10">
        <div className="px-4 lg:px-8 xl:px-12 py-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">

         
            <div className="w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-80 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

           
            <div className="w-full lg:w-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full lg:w-auto px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

     
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-400'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

     
      <div className="px-4 lg:px-8 xl:px-12 py-12 md:py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 h-full"
              >
                <div className="bg-blue-50 p-6 h-64 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-semibold mb-4">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-700 text-sm leading-6 mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{product.price}
                    </span>
                    <Link href={`/products/${product.slug?.current}`}>
                      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-blue-50 rounded-lg p-12 max-w-md mx-auto border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                No Products Found
              </h2>
              <p className="text-gray-600">
                Try changing your search or category filter.
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

