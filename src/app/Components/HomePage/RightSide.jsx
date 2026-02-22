import {
  FaFacebookMessenger,
  FaUsers,
  FaClock,
  FaInfoCircle,
  FaRegSmile,
  FaRegCommentDots,
  FaRegBell,
} from "react-icons/fa";

const MessengerSidebar = () => {
  return (
    <>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaFacebookMessenger className="text-cyan-400 text-2xl" />
        <h2 className="text-xl font-semibold text-cyan-400">
          LINKHUB
        </h2>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-gray-800 rounded-xl p-5 text-center shadow-inner">
        <FaRegSmile className="text-yellow-400 text-3xl mx-auto mb-2" />
        <p className="text-gray-200 text-lg font-medium">
          LINKHUB feature is coming soon
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Our developers are actively working on this section
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-700"></div>

      {/* Info Section */}
      <div className="space-y-4">

        <div className="flex items-center gap-3 text-gray-300">
          <FaUsers className="text-cyan-400" />
          <span className="text-md">Chat with friends (coming soon)</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaRegCommentDots className="text-green-400" />
          <span className="text-md">Real-time messaging experience</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaClock className="text-purple-400" />
          <span className="text-md">Fast and instant communication</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaRegBell className="text-yellow-400" />
          <span className="text-md">Notifications & updates</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <FaInfoCircle className="text-blue-400" />
          <span className="text-md">Stay tuned for future features</span>
        </div>

      </div>

    </>
  );
};

export default MessengerSidebar;