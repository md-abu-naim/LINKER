import React from 'react';

const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-6 p-4 min-h-screen'>
      <aside className='col-span-3 p-4 border'>
        <h2 className="font-semibold mb-3">Bottom Sidebar</h2>
        <p className="text-sm text-gray-600">Additional links or info here.</p>
      </aside>
      <main className='col-span-12 lg:col-span-6 p-4 border'>
        <h2 className="font-semibold mb-3">Additional Main Content</h2>
        <p className="text-sm text-gray-600">More posts or features can go here.</p>
      </main>
      <aside className='col-span-3 p-4 border'>
        <h2 className="font-semibold mb-3">Extra Sidebar</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
      </aside>
    </div>

  );
};

export default Home;