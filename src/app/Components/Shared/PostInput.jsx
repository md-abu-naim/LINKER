import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';
import { useState } from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { FaPhotoVideo, FaUserTag, FaVideo } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import axiosSecure from '@/lib/AxiosSecure';
import { uploadMedia } from '@/lib/uploadMedia';
import toast from 'react-hot-toast';

const PostInput = ({ user }) => {
    const [previewUrl, setPreviewUrl] = useState([])
    const [mediaFiles, setMediaFiles] = useState([])
    const [loading, setLoading] = useState('')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    // handle emoji modal
    const handleWrapperClick = (e) => {
        const emojiBtn = e.target.closest('.emoji-btn')
        const emojiContainer = e.target.closest('.emoji-container')

        if (emojiBtn || emojiContainer) return
    }

    // handle media for show UI
    const handleMedia = async (e) => {
        const files = Array.from(e.target.files)
        if (!files) return

        setMediaFiles(prev => [...prev, ...files])

        const previews = files.map(file => URL.createObjectURL(file))

        setPreviewUrl(prev => [...prev, ...previews])
    }

    // Remove media from UI
    const removeMedia = (index) => {
        if (index === undefined) {
            setMediaFiles([])
            setPreviewUrl([])
            return
        }

        const files = [...mediaFiles]
        const previews = [...previewUrl]
        files.splice(index, 1)
        previews.splice(index, 1)

        setMediaFiles(files)
        setPreviewUrl(previews)
    }

    const handlePost = async (e) => {
        e.preventDefault()
        const form = e.target
        const visibility = form.visibility.value
        const content = form.content.value
        const createdAt = new Date().toDateString()
        const author = {
            name: user.name,
            email: user.email,
            avatar: user.profile
        }
        const media = []

        for (const file of mediaFiles) {
            const uploaded = await uploadMedia(file, (progress) => {
                setLoading(`Uploading: ${progress}%`)
            })
            media.push(uploaded)
        }

        const post = { author, visibility, content, createdAt, media }
        console.log(post);

        const res = await axiosSecure.post(`/posts`, post)
        const data = await res.data.data
        if(data.insertedId){
            toast.success('Upoload post successfully')
            setMediaFiles([])
            setPreviewUrl([])
            form.reset()
            document.getElementById("my_modal_6").checked = false
        }
        setLoading('')
    }

    return (
        <div onClick={handleWrapperClick} role="dialog"
            className="modal flex items-center justify-center bg-black/50 backdrop-blur-lg p-4"
        >
            <form onSubmit={handlePost}
                className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-linear-to-b from-gray-900 via-gray-900 to-black text-white shadow-2xl p-6 flex flex-col h-screen overflow-hidden"
            >

                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
                    <h2 className="text-xl font-semibold tracking-wide">
                        Create Post
                    </h2>

                    <label htmlFor="my_modal_6"
                        className="cursor-pointer rounded-full p-2 hover:bg-white/10 transition"
                    >
                        <RxCross1 size={18} />
                    </label>
                </div>

                {/* USER */}
                <div className="flex items-center gap-3 mt-2">
                    <Image
                        src={user?.profile || "https://i.postimg.cc/65X8XRRf/Face-Care.png"}
                        alt="user"
                        width={45}
                        height={45}
                        className="rounded-full border border-cyan-400"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-xl">{user.name}</span>
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

                <div className="flex-1 overflow-y-auto mt-5 space-y-4">
                    {/* TEXTAREA */}
                    <div className="relative">
                        <textarea
                            ref={(el) => {
                                if (el) {
                                    el.style.height = "auto"
                                    el.style.height = el.scrollHeight + "px"
                                }
                            }}
                            value={text}
                            name="content"
                            onChange={(e) => {
                                setText(e.target.value)
                                e.target.style.height = "auto"
                                e.target.style.height = e.target.scrollHeight + "px"
                            }}
                            placeholder="What's on your mind?"
                            className="w-full resize-none bg-transparent leading-relaxed outline-none border-none pr-10 placeholder-gray-400"
                            rows={1}
                        />

                        {/* underline glow */}
                        <div className="mt-2 h-px w-full bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"></div>

                        {/* emoji button */}
                        <div
                            onClick={(e) => {
                                e.stopPropagation()
                                setShow(prev => !prev)
                            }}
                            className="absolute top-1 right-1 text-xl hover:scale-110 transition"
                        >
                            🙂
                        </div>

                        {show && (
                            <div className="absolute top-1 right-0 z-50 overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-xl">
                                <div onClick={() => setShow(false)} className="absolute top-5 right-1 flex justify-end z-10">
                                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-700 backdrop-blur-sm text-white hover:bg-gray-800 transition">
                                        <RxCross1 size={14} />
                                    </div>
                                </div>
                                <EmojiPicker
                                    onEmojiClick={(emojiData) =>
                                        setText((t) => t + emojiData.emoji)
                                    }
                                    theme="dark"
                                />
                            </div>
                        )}

                    </div>

                    {/* MEDIA PREVIEW */}
                    {previewUrl?.length > 0 && (
                        <div className='relative'>
                            <div onClick={() => removeMedia()} className="absolute top-0 right-0 z-10">
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-700 backdrop-blur-sm text-white hover:bg-gray-800 transition">
                                    <RxCross1 size={14} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {previewUrl.map((url, index) => {
                                    const file = mediaFiles[index]
                                    const type = file.type.split("/")[0]

                                    return (
                                        <div key={index}
                                            className="relative overflow-hidden rounded-xl border border-white/10 group"
                                        >
                                            <span onClick={() => removeMedia(index)}
                                                className="absolute top-2 left-2 z-10 rounded-full bg-black/60 p-1 opacity-0 group-hover:opacity-100 transition"
                                            >
                                                <RxCross1 size={14} />
                                            </span>

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
                    {loading ? loading : 'Share Post 🚀'}
                </button>
            </form>
        </div>
    );
};

export default PostInput;