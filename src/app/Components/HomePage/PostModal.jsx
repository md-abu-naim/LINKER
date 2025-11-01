'use client'
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const PostModal = () => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    const handleWrapperClick = (e) => {
        const emojiBtn = e.target.closest('.emoji-btn')
        const emojiContainer = e.target.closest('.emoji-container')

        if (emojiBtn || emojiContainer) return
        setShow(false)
    }

    return (
        <div onClick={handleWrapperClick} className="modal" role="dialog">
            <div className="modal-box relative">
                <div className="flex items-center justify-center pb-4">
                    <h2 className="text-2xl font-semibold">Create a New Post</h2>
                    <label htmlFor="my_modal_6" className="absolute right-6 bg-gray-700 hover:bg-gray-800 rounded-full p-2 text-xl"><RxCross1 /></label>
                </div>
                <hr className="text-gray-700" />

                {/* Profile */}
                <div className="flex items-center gap-2 mt-3">
                    <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="User" width={24} height={20} className="inline-block w-11 h-11 border border-cyan-400 rounded-full " />
                    <div className="flex flex-col">
                        <span className="font-semibold text-md">Mohammad Abu Naim</span>

                        <select name="visibility" defaultValue="public" className="select w-28 h-4 bg-gray-700 border-none outline-none cursor-pointer">
                            <option value="public">🌍 Public</option>
                            <option value="friends">👥 Friends</option>
                            <option value="private">🔒 Only Me</option>
                        </select>
                    </div>
                </div>

                {/* Textarea */}
                <div >
                    <textarea value={text}
                        className="relative w-full p-4 text-xl focus:outline-none resize-none rounded" placeholder="Whats on your mind? Mohammad Abu?"
                        rows={7} onChange={e => setText(e.target.value)}
                    ></textarea>
                    <button onClick={() => setShow(!show)} title="Emoji" className="emoji-btn absolute bottom-6 right-6 text-2xl rounded-full">🙂</button>
                    {
                        show && <div className="emoji-container absolute bottom-10 right-0 z-20">
                            <EmojiPicker
                                onEmojiClick={(emojiData) => setText((t) => t + emojiData.emoji)}
                                theme="dark"
                                lazyLoadEmojis
                                searchDisabled={false}
                                skinTonesDisabled={false}
                                previewConfig={{ showPreview: false }}
                                width={300}
                                height={350}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PostModal;