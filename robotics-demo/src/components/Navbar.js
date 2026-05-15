'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const pathname = usePathname();

  return (

    <nav className="bg-white shadow-md px-10 py-5 sticky top-0 z-50">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-700 cursor-pointer">
            RoboXcel
          </h1>
        </Link>

        {/* MENU */}
        <div className="flex gap-8 items-center">

          <Link
            href="/"
            className={`font-semibold ${pathname === '/'
                ? 'text-blue-700'
                : 'text-gray-600'
              }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`font-semibold ${pathname === '/products'
                ? 'text-blue-700'
                : 'text-gray-600'
              }`}
          >
            Products
          </Link>

          <Link
            href="/about"
            className={`font-semibold ${pathname === '/about'
                ? 'text-blue-700'
                : 'text-gray-600'
              }`}
          >
            About
          </Link>

          <Link
            href="/resources"
            className={`font-semibold ${pathname === '/resources'
                ? 'text-blue-700'
                : 'text-gray-600'
              }`}
          >
            Resources
          </Link>

          <button
            onClick={() => window.location.href = "/contact"}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Contact / Request Quote
          </button>

        </div>

      </div>

    </nav>

  );
}