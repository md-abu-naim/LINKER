
const FriendSearchForm = () => {
    return (
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 flex-1 max-w-xs sm:max-w-sm md:max-w-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
            <input
                type="search"
                placeholder="Search.."
                className=" outline-none p-1 px-2"
            />
        </div>
    );
};

export default FriendSearchForm;