import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';
import { useState } from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { FaPhotoVideo, FaUserTag, FaVideo } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';

const PostInput = ({ user }) => {
    const [previewUrl, setPreviewUrl] = useState()
    const [mediaFiles, setMediaFiles] = useState([])
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    const handleWrapperClick = (e) => {
        const emojiBtn = e.target.closest('.emoji-btn')
        const emojiContainer = e.target.closest('.emoji-container')

        if (emojiBtn || emojiContainer) return
        setShow(false)
    }

    console.log('from bahir', previewUrl);

    const handleMedia = async (e) => {
        const files = Array.from(e.target.files)
        if (!files) return

        setMediaFiles(prev => [...prev, ...files])

        const previews = files.map(file => URL.createObjectURL(file))

        setPreviewUrl(previews)
        // if (type === 'image') {
        //     const formData = new FormData()
        //     formData.append('image', file)
        //     const res = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_API}`, formData)
        //     const data = await res.data.data.display_url
        //     setMedia(data);
        //     setMediaType(type);

        // } else if (type === 'video') {
        //     console.log('from video', type, file);
        // }
    }

    const handlePost = async (e) => {
        e.preventDefault()
        const form = e.target
        const visibility = form.visibility.value
        const content = form.content.value
        const createdAt = new Date().toDateString()
        // const visibility = form.visibility.value
        // const visibility = form.visibility.value 

        const author = {
            name: user.name,
            email: user.email,
            avatar: user.profile
        }

        const post = { author, visibility, content, media, createdAt, media, mediaType }
        console.log(post);
    }

    return (
        <div
            onClick={handleWrapperClick}
            role="dialog"
            className="modal flex items-center justify-center bg-black/50 backdrop-blur-lg p-4"
        >
            <form
                onSubmit={handlePost}
                className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-linear-to-b from-gray-900 via-gray-900 to-black text-white shadow-2xl p-6 flex flex-col h-[90vh] overflow-hidden"
            >

                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Create Post
                    </h2>

                    <label
                        htmlFor="my_modal_6"
                        className="cursor-pointer rounded-full p-2 hover:bg-white/10 transition"
                    >
                        <RxCross1 size={18} />
                    </label>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto mt-5 space-y-4">

                    {/* USER */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={user?.profile || "https://i.postimg.cc/65X8XRRf/Face-Care.png"}
                            alt="user"
                            width={45}
                            height={45}
                            className="rounded-full border border-cyan-400"
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">Mohammad Abu Naim</span>
                            <select
                                name="visibility"
                                defaultValue="public"
                                className="text-xs bg-gray-800 rounded-md px-2 py-0.5 mt-1 w-fit outline-none"
                            >
                                <option value="public">🌍 Public</option>
                                <option value="friends">👥 Friends</option>
                                <option value="private">🔒 Only Me</option>
                            </select>
                        </div>
                    </div>

                    {/* TEXTAREA */}
                    <div className="relative">
                        <textarea
                            value={text}
                            name="content"
                            rows={4}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="What's on your mind?"
                            className="w-full resize-none rounded-2xl bg-gray-800/60 p-4 text-sm outline-none border border-white/10 focus:border-cyan-400 transition shadow-inner placeholder-gray-400"
                        />

                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute bottom-3 right-3 text-2xl hover:scale-110 transition"
                        >
                            🙂
                        </button>

                        {show && (
                            <div className="absolute bottom-14 right-0 z-20 overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-lg">
                                <EmojiPicker
                                    onEmojiClick={(emojiData) =>
                                        setText((t) => t + emojiData.emoji)
                                    }
                                    theme="dark"
                                    previewConfig={{ showPreview: false }}
                                    width={320}
                                    height={360}
                                />
                            </div>
                        )}
                    </div>

                    {/* MEDIA PREVIEW */}
                    {previewUrl?.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mt-3">
                            {previewUrl.map((url, index) => {
                                const file = mediaFiles[index]
                                const type = file.type.split("/")[0]

                                return (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-xl border border-white/10 group"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => removeMedia(index)}
                                            className="absolute top-2 right-2 z-10 rounded-full bg-black/60 p-1 opacity-0 group-hover:opacity-100 transition"
                                        >
                                            <RxCross1 size={14} />
                                        </button>

                                        {type === "image" && (
                                            <Image width={600} height={500}
                                                src={url} alt='Preview Image'
                                                className="h-44 w-full object-cover rounded-xl"
                                            />
                                        )}

                                        {type === "video" && (
                                            <video
                                                src={url}
                                                controls
                                                className="h-44 w-full object-cover rounded-xl"
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}

                </div>

                {/* ACTION BAR */}
                <div className="mt-4 rounded-xl border border-white/10 bg-gray-800/40 p-2 shrink-0">
                    <div className="flex items-center justify-around">
                        <p className=" text-gray-400">Add to your post</p>
                        <input
                            onChange={handleMedia}
                            name="media"
                            type="file"
                            id="coverInput"
                            accept="image/*,video/*"
                            multiple
                            className="hidden"
                        />

                        <label
                            htmlFor="coverInput"
                            className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-green-400"
                        >
                            <FaPhotoVideo size={20} />
                        </label>

                        <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-yellow-400">
                            <BsEmojiSunglasses size={20} />
                        </span>

                        <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-red-400">
                            <FaVideo size={20} />
                        </span>

                        <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-blue-400">
                            <FaUserTag size={20} />
                        </span>
                    </div>
                </div>

                {/* POST BUTTON */}
                <button
                    className="mt-4 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold hover:opacity-90 transition shrink-0" >
                    Share Post 🚀
                </button>
            </form>
        </div>
    );
};

export default PostInput;