import LeftAside from './Components/HomePage/LeftAside';
import Main from './Components/HomePage/Main';

const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-6 md:p-4 px-2'>

      {/* Left Sidebar */}
      <aside className='col-span-3 hidden lg:block h-screen overflow-y-auto scroll-smooth'>
        <LeftAside />
      </aside>

      {/* Main Content */}
      <main className='col-span-12 lg:col-span-6 md:px-10 h-screen overflow-y-auto scroll-smooth scrollable'>
        <Main />
      </main>

      {/* Right Sidebar: Message */}
      <aside className='col-span-3 p-4 hidden lg:block border h-screen overflow-y-auto scroll-smooth'>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
        <h2 className="font-semibold mb-3">Messenger Upcoming</h2>
        <p className="text-sm text-gray-600">Extra content or widgets here.</p>
      </aside>
    </div>

  );
};

export default Home;