import Image from "next/image";

const Profile = () => {
    const posts = [
        { id: 1, img: "https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp" },
        { id: 2, img: "https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg" },
        { id: 3, img: "https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp" },
        { id: 4, img: "https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg" },
        { id: 5, img: "https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp" },
    ];
    return (
        <div>
            <div className="bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-center shadow-gray-300">
                    <Image
                        src="https://i.postimg.cc/MTvqpvT7/cover.jpg"
                        alt="Cover"
                        className="bg-cover rounded-b-md w-5xl h-[400px] shadow-2xl shadow-gray-700"
                        width={800} height={400}
                    />
                </div>
            </div>

            <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden">
                    {/* Cover Photo */}
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                        <Image
                            src="https://i.postimg.cc/zGJ6C2CF/cover.jpg"
                            alt="Cover"
                            fill
                            className="object-cover opacity-70"
                        />
                    </div>

                    {/* Profile Header */}
                    <div className="relative px-6 -mt-16 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
                            <Image
                                src="https://i.postimg.cc/cH1wVBR0/profile.jpg"
                                alt="Profile"
                                width={200}
                                height={200}
                                className="object-cover"
                            />
                        </div>

                        <h1 className="mt-4 text-2xl font-bold text-gray-800">Mohammad Naim</h1>
                        <p className="text-gray-600">Frontend Developer • React • MERN</p>

                        <div className="mt-4 flex gap-4">
                            <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">
                                Follow
                            </button>
                            <button className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-300 transition">
                                Message
                            </button>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-8 grid grid-cols-3 text-center border-t border-b py-4 bg-gray-50">
                        <div>
                            <h3 className="font-bold text-gray-800">1.2k</h3>
                            <p className="text-gray-500 text-sm">Followers</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">980</h3>
                            <p className="text-gray-500 text-sm">Following</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">112</h3>
                            <p className="text-gray-500 text-sm">Posts</p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="px-6 py-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">About</h2>
                        <p className="text-gray-600 text-sm leading-6">
                            Passionate MERN stack developer building modern UI experiences.
                            Always learning, improving, and creating beautiful digital products.
                        </p>
                    </div>

                    {/* Posts Section */}
                    <div className="px-6 pb-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Posts</h2>

                        <div className="grid grid-cols-3 gap-3">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="w-full h-32 bg-gray-200 rounded-xl overflow-hidden shadow-sm hover:scale-[1.03] transition cursor-pointer"
                                >
                                    <Image
                                        src={post.img}
                                        alt="Post"
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

