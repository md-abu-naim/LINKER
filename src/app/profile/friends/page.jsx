import FriendSearchForm from "./FriendSearchForm";

const Friends = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 max-w-5xl mx-auto my-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">Friends</h3>
                <FriendSearchForm />
            </div>
        </div>
    );
};

export default Friends;