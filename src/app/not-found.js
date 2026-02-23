import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-[1.618fr_1fr] gap-12 items-center">

        {/* Left Section */}
        <div className="space-y-6">

          {/* LINKER Logo */}
          <Link href='/' className="flex items-center gap-2">
            <Image src='/Logo.png' alt="Linker" width={600} height={400} className="w-16 h-auto" />
            <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400">LINKER</span>
          </Link>

          {/* 404 Big Number */}
          <h2 className="text-[120px] md:text-[150px] font-bold leading-none text-gray-300 select-none">
            404
          </h2>

          {/* Message */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Oops! Page not found.
            </h3>
            <p className="text-gray-500 max-w-md">
              The page you are looking for might have been removed,
              had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-gray-800 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Go Back Home
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Decorative Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-gray-500 shadow-inner"></div>
            <div className="absolute inset-10 rounded-full bg-gray-300 flex items-center justify-center shadow-lg">
              <span className="text-6xl font-bold text-gray-950">
                :(
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;