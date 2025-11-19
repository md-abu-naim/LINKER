import Locations from "../Components/About/Lives&Locations/Locations";
import Overview from "../Components/About/Overview";
import Sidebar from "../Components/About/Sidebar";
import Educations from "../Components/About/Work&Education/Educations";


export default async function AboutDynamic({ params }) {
  const { aboutSection } = await params;

  let content;

  switch (aboutSection) {
    case "about":
      content = <Overview />;
      break;
    case "about_customize_profile":
      content = <h2>Customize Profile</h2>;
      break;
    case "about_work_and_education":
      content = <Educations />;
      break;
    case "about_lives_and_locations":
      content = <Locations />;
      break;
    case "about_information":
      content = <h2>Basic Info</h2>;
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

