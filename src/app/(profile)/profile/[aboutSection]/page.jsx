import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CustomizeProfile from "./Customization/CustomizeProfile";
import Information from "./Information/Information";
import Locations from "./Lives&Locations/Locations";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import Educations from "./Work&Education/Educations";
import { getServerSession } from "next-auth";
import axios from "axios";
import NotFound from "@/app/not-found";

export const metadata = {
  title: "LINKER | | Abouts",
  description: "Linker current user's about page",
};

export default async function AboutDynamic({ params }) {
  const { user: session } = await getServerSession(authOptions)
  const { aboutSection } = await params;

  const response = await axios(`${process.env.NEXT_PUBLIC_API}/users/${session?.email}`)
  const user = await response.data.data


  let content;

  switch (aboutSection) {
    case "about":
      content = <Overview user={user} />;
      break;
    case "about_customize_profile":
      content = <CustomizeProfile user={user} />
      break;
    case "about_work_and_education":
      content = <Educations user={user} />;
      break;
    case "about_lives_and_locations":
      content = <Locations user={user} />;
      break;
    case "about_information":
      content = <Information user={user} />;
      break;
    default:
      content = <NotFound />;
  }

  return (
    <div className='grid grid-cols-12 gap-4 max-w-5xl mx-auto'>
      {/* Sidebar */}
      <div className='col-span-12 lg:col-span-5 mt-2'>
        <Sidebar />
      </div>

      {/* Content Area */}
      <div className='col-span-12 lg:col-span-7 lg:mt-2'>
        {content}
      </div>
    </div>
  )
}

