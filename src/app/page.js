import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import LeftAside from './Components/HomePage/LeftAside';
import Main from './Components/HomePage/Main';
import MessengerSidebar from './Components/HomePage/RightSide';
import axios from 'axios';

const Home = async () => {
  const session = await getServerSession(authOptions)

  const response = await axios(`${process.env.NEXT_PUBLIC_API}/users/${session?.user?.email}`)
  const user = await response.data.data

  return (
    <div className='grid grid-cols-12 gap-6 mt-11 md:p-4 px-2 h-screen overflow-hidden fixed inset-0'>

      {/* Left Sidebar */}
      <aside className='col-span-3 hidden lg:block h-full overflow-hidden hover:overflow-y-auto scroll-smooth'>
        <LeftAside user={user} />
      </aside>

      {/* Main Content */}
      <main className='col-span-12 lg:col-span-6 md:px-10 h-full overflow-y-auto scroll-smooth scrollable'>
        <Main user={user} />
      </main>

      {/* Right Sidebar: Message */}
      <aside className='col-span-3 p-4 hidden lg:block h-full overflow-hidden hover:overflow-y-auto scroll-smooth g-gray-900 border border-gray-800 rounded-2xl shadow-lg'>
        <MessengerSidebar />
      </aside>
    </div>

  );
};

export default Home;
