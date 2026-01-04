// import React from 'react';

// const Explores = () => {
//     return (
//         <div>
//             explores page
//         </div>
//     );
// };

// export default Explores;


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCard() {
  const [expanded, setExpanded] = useState(false);

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit consequatur veniam, quisquam deleniti ipsa asperiores deserunt doloremque porro. Facere praesentium rerum labore repudiandae at laborum quia corporis similique eveniet.';

  return (
    <Link
      href="/profile"
      className="flex flex-row md:flex-col border border-cyan-950 rounded-lg overflow-hidden w-full max-w-md bg-gray-950"
    >
      {/* Image */}
      <Image
        src="https://i.postimg.cc/GmqrhrbJ/86c86962-8cd0-4319-b9fc-7815555986b5.jpg"
        alt="Profile"
        width={600}
        height={400}
        className="w-24 h-28 md:w-full md:h-56 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-3 py-2">
        <h2 className="text-base md:text-lg font-semibold text-white">
          Mohammad Abu Naim
        </h2>

        {/* Description */}
        <div className="mt-1">
          <p
            className={`
              text-sm text-gray-400 overflow-hidden transition-all duration-300
              ${expanded ? '' : 'line-clamp-2 md:line-clamp-3'}
            `}
          >
            {text}
          </p>

          <button
            onClick={(e) => {
              e.preventDefault(); // prevent Link navigation
              setExpanded(!expanded);
            }}
            className="text-cyan-500 text-sm font-medium mt-1 hover:underline"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-row md:flex-col gap-2 mt-3">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-cyan-600 hover:bg-cyan-800 text-sm p-1 rounded-lg w-full"
          >
            Add Friend
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-gray-600 hover:bg-gray-800 text-sm p-1 rounded-lg w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </Link>
  );
}
