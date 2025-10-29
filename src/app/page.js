import React from 'react';
import LeftAside from './Components/HomePage/LeftAside';

const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-6 p-4 min-h-screen'>
      <aside className='col-span-3'>
        <LeftAside />
      </aside>
      <main className='col-span-12 lg:col-span-6 p-4 border'>
        <h2 className="font-semibold mb-3">News Feed Upcoming</h2>
        <p className="text-sm text-gray-600">More posts or features can go here.</p>
      </main>
      <aside className='col-span-3 p-4 border'>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
      </aside>
    </div>

  );
};

export default Home;