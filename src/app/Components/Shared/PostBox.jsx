'use client'
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { InputMedia } from "./MediaInput";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaUserTag, FaVideo } from "react-icons/fa";

const PostBox = () => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    const handleWrapperClick = (e) => {
        const emojiBtn = e.target.closest('.emoji-btn')
        const emojiContainer = e.target.closest('.emoji-container')

        if (emojiBtn || emojiContainer) return
        setShow(false)
    }

    return (
        <div onClick={handleWrapperClick} role="dialog" className="modal mt-7 flex items-center justify-center backdrop-blur-md bg-black/40" >
            <div className="modal-box relative max-w-lg w-full bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl text-white border border-cyan-500/20 shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.7)]">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                    <h2 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Create a New Post</h2>
                    <label htmlFor="my_modal_6" className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></label>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 mt-5">
                    <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={48} height={48} className="w-12 h-12 border border-cyan-400 rounded-full " />
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg">Mohammad Abu Naim</span>
                        <select name="visibility" defaultValue="public" className="select select-sm text-sm w-28 h-4 bg-gray-800/80 border-none outline-none cursor-pointer">
                            <option value="public">🌍 Public</option>
                            <option value="friends">👥 Friends</option>
                            <option value="private">🔒 Only Me</option>
                        </select>
                    </div>
                </div>

                {/* Textarea */}
                <div className="relative mt-4">
                    <textarea value={text}
                        className="w-full p-4 text-lg bg-gray-900/70 focus:outline-none focus:border-cyan-400 resize-none rounded-2xl border border-gray-700 transition-all duration-200 placeholder-gray-400 shadow-inner" placeholder="Whats on your mind? Mohammad Abu?"
                        rows={6} onChange={e => setText(e.target.value)}
                    ></textarea>
                    <button onClick={() => setShow(!show)} title="Emoji" className="emoji-btn absolute bottom-4 right-2 text-3xl rounded-full transition-transform duration-200 hover:scale-125 hover:rotate-6">
                        <span className="animate-bounce">🙂</span>
                    </button>

                    {
                        show && <div className="emoji-container absolute bottom-16 right-0 z-30 backdrop-blur-xl bg-gray-900/80 rounded-xl border border-cyan-500/30 shadow-lg overflow-hidden">
                            <EmojiPicker
                                onEmojiClick={(emojiData) => setText((t) => t + emojiData.emoji)}
                                theme="dark"
                                lazyLoadEmojis
                                searchDisabled
                                skinTonesDisabled
                                previewConfig={{ showPreview: false }}
                                width={320}
                                height={360}
                            />
                        </div>
                    }
                </div>

                {/* Activities */}
                <div className="mt-6 border border-gray-700 rounded-2xl p-3 bg-gray-800/40 backdrop-blur-md">
                    <h2 className="text-lg font-semibold mb-2 text-gray-300">Add to your post</h2>
                    <div className="flex items-center justify-around">
                        <InputMedia />
                        <button className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-yellow-400 transition-transform hover:scale-110"><BsEmojiSunglasses /></button>
                        <button className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-red-500 transition-transform hover:scale-110"><FaVideo /></button>
                        <button className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-blue-500 transition-transform hover:scale-110"><FaUserTag /></button>
                    </div>
                </div>

                {/* Post Button */}
                <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)]">
                        Share Post 🚀
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostBox;