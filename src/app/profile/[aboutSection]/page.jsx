import CustomizeProfile from "./Customization/CustomizeProfile";
import Information from "./Information/Information";
import Locations from "./Lives&Locations/Locations";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import Educations from "./Work&Education/Educations";

export const metadata = {
  title: "LINKER | | Abouts",
  description: "Linker current user's about page",
};

export default async function AboutDynamic({ params }) {
  const { aboutSection } = await params;

  let content;

  switch (aboutSection) {
    case "about":
      content = <Overview />;
      break;
    case "about_customize_profile":
      content = <CustomizeProfile />
      break;
    case "about_work_and_education":
      content = <Educations />;
      break;
    case "about_lives_and_locations":
      content = <Locations />;
      break;
    case "about_information":
      content = <Information />;
      break;
    default:
      content = <h2>Page Not Found</h2>;
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

