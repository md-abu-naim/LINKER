import Link from "next/link";
import { MdOutlineDashboard, MdOutlineInfo } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default async function AboutDynamic({ params }) {
  const { aboutSection } = await params;

  let content;

  switch (aboutSection) {
    case "about":
      content = <h2>about Profile</h2>;
      break;
    case "about_customize_profile":
      content = <h2>Customize Profile</h2>;
      break;
    case "about_lives_and_locations":
      content = <h2>Lives & Locations</h2>;
      break;
    case "about_information":
      content = <h2>Basic Info</h2>;
      break;
    case "about_work_and_education":
      content = <h2>Work & Education</h2>;
      break;
    default:
      content = <h2>Page Not Found</h2>;
  }

  const navLinks = [
    { href: "/profile/about", icon: <MdOutlineDashboard />, label: "Overview" },
    { href: "/profile/about_customize_profile", icon: <LuSettings2 />, label: "Customize Profile" },
    { href: "/profile/about_work_and_education", icon: <FaGraduationCap />, label: "Work & Education" },
    { href: "/profile/about_lives_and_locations", icon: <FiMapPin />, label: "Lives & Locations" },
    { href: "/profile/about_information", icon: <MdOutlineInfo />, label: "Basic Information" }
  ]

  return (
    <div className='grid grid-cols-12 gap-4 max-w-5xl mx-auto'>
      {/* Sidebar */}
      <div className='col-span-12 lg:col-span-5 mt-2'>
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 rounded-2xl backdrop-blur-xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
          <h4 className="text-2xl font-bold mb-2">About</h4>
          <div className="flex flex-col space-y-0.5">
            {
              navLinks.map(link => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-3 p-2.5 rounded-xl bg-gray-800/40 hover:bg-gray-700/60 hover:shadow-[0_0_18px_rgba(0,255,200,0.08)] transition-all duration-300">
                  <span className={`text-lg text-cyan-400 bg-gray-900 p-2 rounded-lg group-hover:scale-110 transition-transform`}>{link.icon}</span>
                  <span className="text-gray-200 text-md font-medium group-hover:text-cyan-400 transition-colors">{link.label}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className='col-span-12 lg:col-span-7 border mt-2'>
        {content}
      </div>
    </div>
  )
}

