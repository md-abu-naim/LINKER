'use client'
import { useState } from "react";
import Image from "next/image";
import { FaRegThumbsUp, FaComment, FaShare } from "react-icons/fa";

const PostImage = () => {
    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);

    const nextImage = () => setCurrent((prev) => (prev + 1) % post.images.length);
    const prevImage = () => setCurrent((prev) => (prev - 1 + post.images.length) % post.images.length);
    // dummyPost.js
    const post = {
        user: {
            name: "Mohammad Abu Naim",
            avatar: "https://i.postimg.cc/65X8XRRf/Face-Care.png"
        },
        time: "2 hours ago",
        visibility: "🌍 Public",
        caption: "Exploring the new React features! 🚀✨ Loving the component-based architecture and hooks.",
        images: [
            "https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg",
            "https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg",
            "https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg",
            "https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg",
            "https://i.postimg.cc/RVNGzwQD/Soothing-Green-Tea-Face-Cream.jpg",

        ],
        comments: [
            {
                user: { name: "Ali Hasan", avatar: "https://i.postimg.cc/yYT5zJzv/User1.png" },
                text: "Wow! That looks amazing 👏"
            },
            {
                user: { name: "Sara Khan", avatar: "https://i.postimg.cc/dtZCkQbQ/User2.png" },
                text: "I totally agree! React hooks are game-changers!"
            },
            {
                user: { name: "Rafi Ahmed", avatar: "https://i.postimg.cc/8cR8m6k9/User3.png" },
                text: "Can't wait to try this in my project 🔥"
            }
        ]
    };

    return (
        <>
            {/* Image Grid / Clickable */}
            <div className="mt-3 grid gap-2 cursor-pointer">
                {post.images.length === 1 ? (
                    <div onClick={() => { setOpen(true); setCurrent(0); }} className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image src={post.images[0]} alt="Post Image" width={700} height={400} className="w-full h-80 object-cover" />
                    </div>
                ) : (
                    <div className={`grid gap-2 ${post.images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-2"}`}>
                        {post.images.slice(0, 4).map((img, i) => (
                            <div key={i} onClick={() => { setOpen(true); setCurrent(i); }} className="relative rounded-xl overflow-hidden shadow-md">
                                <Image src={img} alt={`Post Image ${i + 1}`} width={700} height={400} className="w-full h-40 object-cover" />
                                {i === 3 && post.images.length > 4 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                                        +{post.images.length - 4}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Fullscreen modal / lightbox */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center">
                    <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-white text-3xl font-bold z-50">&times;</button>

                    <div className="flex w-full h-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden">
                        {/* Left: Image slider */}
                        <div className="relative w-full md:w-2/3 h-full flex items-center justify-center bg-black">
                            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50">&#10094;</button>
                            <Image src={post.images[current]} alt={`Full Image ${current + 1}`} width={1000} height={800} className="object-contain max-h-full max-w-full" />
                            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50">&#10095;</button>
                        </div>

                        {/* Right: Post info */}
                        <div className="hidden md:flex flex-col w-1/3 bg-gray-900 p-4 overflow-y-auto">
                            {/* User info */}
                            <div className="flex items-center gap-3 mb-3">
                                <Image src={post.user.avatar} alt={post.user.name} width={50} height={50} className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover" />
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold">{post.user.name}</span>
                                    <span className="text-gray-400 text-sm">{post.time} · {post.visibility}</span>
                                </div>
                            </div>

                            {/* Caption */}
                            <p className="text-gray-200 mb-4">{post.caption}</p>

                            {/* Action buttons */}
                            <div className="flex items-center gap-4 mb-4">
                                <button className="flex items-center gap-1 text-gray-300 hover:text-blue-400"><FaRegThumbsUp /> Like</button>
                                <button className="flex items-center gap-1 text-gray-300 hover:text-green-400"><FaComment /> Comment</button>
                                <button className="flex items-center gap-1 text-gray-300 hover:text-purple-400"><FaShare /> Share</button>
                            </div>

                            {/* Comments */}
                            <div className="flex flex-col gap-3">
                                {post.comments.map((c, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Image src={c.user.avatar} alt={c.user.name} width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
                                        <div className="bg-gray-800/60 p-2 rounded-xl flex flex-col gap-1">
                                            <span className="text-gray-200 font-semibold text-sm">{c.user.name}</span>
                                            <span className="text-gray-300 text-sm">{c.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostImage;
