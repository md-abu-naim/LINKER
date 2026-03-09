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
        // <div onClick={handleWrapperClick} role="dialog" className="modal mt-7 flex items-center justify-center backdrop-blur-md bg-black/40" >
        //     <form onSubmit={handlePost} className="modal-box relative max-w-lg w-full bg-linear-to-b from-gray-900 via-gray-850 to-gray-950 backdrop-blur-xl text-white border border-cyan-500/20 shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.7)]">

        //         {/* Header */}
        //         <div className="flex items-center justify-between border-b border-gray-700 pb-3">
        //             <h2 className="text-2xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Create a New Post</h2>
        //             <label htmlFor="my_modal_6" className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors rounded-full p-2 text-xl"><RxCross1 /></label>
        //         </div>

        //         {/* Profile */}
        //         <div className="flex items-center gap-3 mt-5">
        //             <Image src={user?.profile || "https://i.postimg.cc/65X8XRRf/Face-Care.png"} alt="User" width={48} height={48} className="w-12 h-12 border border-cyan-400 rounded-full " />
        //             <div className="flex flex-col">
        //                 <span className="font-semibold text-lg">Mohammad Abu Naim</span>
        //                 <select name="visibility" defaultValue="public" className="select select-sm text-sm w-28 h-4 bg-gray-800/80 border-none outline-none cursor-pointer">
        //                     <option value="public">🌍 Public</option>
        //                     <option value="friends">👥 Friends</option>
        //                     <option value="private">🔒 Only Me</option>
        //                 </select>
        //             </div>
        //         </div>

        //         {/* Textarea */}
        //         {/* <div className="relative mt-4">
        //             <textarea value={text} name='content'
        //                 className="w-full p-4 text-lg bg-gray-900/70 focus:outline-none focus:border-cyan-400 resize-none rounded-2xl border border-gray-700 transition-all duration-200 placeholder-gray-400 shadow-inner" placeholder="Whats on your mind? Mohammad Abu?"
        //                 rows={6} onChange={e => setText(e.target.value)}
        //             ></textarea>
        //             <div onClick={() => setShow(!show)} title="Emoji" className="emoji-btn absolute bottom-4 right-2 text-3xl rounded-full transition-transform duration-200 hover:scale-125 hover:rotate-6">
        //                 <span className="animate-bounce">🙂</span>
        //             </div>

        //             {
        //                 show && <div className="emoji-container absolute bottom-16 right-0 z-30 backdrop-blur-xl bg-gray-900/80 rounded-xl border border-cyan-500/30 shadow-lg overflow-hidden">
        //                     <EmojiPicker
        //                         onEmojiClick={(emojiData) => setText((t) => t + emojiData.emoji)}
        //                         theme="dark"
        //                         lazyLoadEmojis
        //                         searchDisabled
        //                         skinTonesDisabled
        //                         previewConfig={{ showPreview: false }}
        //                         width={320}
        //                         height={360}
        //                     />
        //                 </div>
        //             }
        //         </div> */}
        //         <div className="relative mt-4">
        //             <textarea
        //                 value={text}
        //                 name="content"
        //                 rows={6}
        //                 onChange={(e) => setText(e.target.value)}
        //                 className="w-full p-4 text-lg bg-gray-900/70 focus:outline-none focus:border-cyan-400 resize-none rounded-2xl border border-gray-700 transition-all duration-200 placeholder-gray-400 shadow-inner"
        //                 placeholder="Whats on your mind? Mohammad Abu?"
        //             />

        //             {/* emoji button */}
        //             <div
        //                 onClick={() => setShow(!show)}
        //                 className="absolute bottom-4 right-2 text-3xl rounded-full cursor-pointer hover:scale-110"
        //             >
        //                 🙂
        //             </div>

        //             {show && (
        //                 <div className="absolute bottom-16 right-0 z-30 backdrop-blur-xl bg-gray-900/80 rounded-xl border border-cyan-500/30 shadow-lg overflow-hidden">
        //                     <EmojiPicker
        //                         onEmojiClick={(emojiData) =>
        //                             setText((t) => t + emojiData.emoji)
        //                         }
        //                         theme="dark"
        //                         previewConfig={{ showPreview: false }}
        //                         width={320}
        //                         height={360}
        //                     />
        //                 </div>
        //             )}
        //         </div>

        //         {/* MEDIA PREVIEW */}
        //         {previewUrl?.length > 0 && (
        //             <div className="mt-4 grid grid-cols-2 gap-3">

        //                 {previewUrl.map((url, index) => {

        //                     const file = mediaFiles[index]
        //                     const type = file.type.split("/")[0]

        //                     return (
        //                         <div key={index} className="relative rounded-xl overflow-hidden">

        //                             <button
        //                                 type="button"
        //                                 onClick={() => removeMedia(index)}
        //                                 className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full z-10"
        //                             >
        //                                 <RxCross1 />
        //                             </button>

        //                             {type === "image" && (
        //                                 <img src={url} className="w-full h-48 object-cover" />
        //                             )}

        //                             {type === "video" && (
        //                                 <video src={url} controls className="w-full h-48 object-cover" />
        //                             )}

        //                         </div>
        //                     )
        //                 })}

        //             </div>
        //         )}


        //         {/* Activities */}
        //         <div className="mt-6 border border-gray-700 rounded-2xl p-3 bg-gray-800/40 backdrop-blur-md">
        //             <h2 className="text-lg font-semibold mb-2 text-gray-300">Add to your post</h2>
        //             <div className="flex items-center justify-around">
        //                 <input onChange={handleMedia} name="media" type="file" id="coverInput" accept="image/*,video/*" multiple className="hidden" />
        //                 <label htmlFor='coverInput' className="text-2xl hover:bg-gray-700 hover:text-cyan-400 p-1 px-2 rounded-md transition-transform hover:scale-110">
        //                     <span className="text-green-500"><FaPhotoVideo /></span>
        //                 </label>
        //                 <span className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-yellow-400 transition-transform hover:scale-110"><BsEmojiSunglasses /></span>
        //                 <span className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-red-500 transition-transform hover:scale-110"><FaVideo /></span>
        //                 <span className="text-2xl hover:bg-gray-700 p-2 rounded-lg text-blue-500 transition-transform hover:scale-110"><FaUserTag /></span>
        //             </div>
        //         </div>

        //         {/* Post Button */}
        //         <div className="mt-6">
        //             <button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)]">
        //                 Share Post 🚀
        //             </button>
        //         </div>
        //     </form>
        // </div>
        // <div
        //     onClick={handleWrapperClick}
        //     role="dialog"
        //     className="modal flex items-center justify-center bg-black/50 backdrop-blur-lg p-4"
        // >
        //     <form
        //         onSubmit={handlePost}
        //         className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white shadow-2xl p-6"
        //     >

        //         {/* HEADER */}
        //         <div className="flex items-center justify-between border-b border-white/10 pb-4">
        //             <h2 className="text-xl font-semibold tracking-wide">
        //                 Create Post
        //             </h2>

        //             <label
        //                 htmlFor="my_modal_6"
        //                 className="cursor-pointer rounded-full p-2 hover:bg-white/10 transition"
        //             >
        //                 <RxCross1 size={18} />
        //             </label>
        //         </div>

        //         {/* USER */}
        //         <div className="flex items-center gap-3 mt-5">

        //             <Image
        //                 src={user?.profile || "https://i.postimg.cc/65X8XRRf/Face-Care.png"}
        //                 alt="user"
        //                 width={45}
        //                 height={45}
        //                 className="rounded-full border border-cyan-400"
        //             />

        //             <div className="flex flex-col">

        //                 <span className="font-semibold text-sm">
        //                     Mohammad Abu Naim
        //                 </span>

        //                 <select
        //                     name="visibility"
        //                     defaultValue="public"
        //                     className="text-xs bg-gray-800 rounded-md px-2 py-[2px] mt-1 w-fit outline-none"
        //                 >
        //                     <option value="public">🌍 Public</option>
        //                     <option value="friends">👥 Friends</option>
        //                     <option value="private">🔒 Only Me</option>
        //                 </select>

        //             </div>
        //         </div>

        //         {/* TEXTAREA */}
        //         <div className="relative mt-5">

        //             <textarea
        //                 value={text}
        //                 name="content"
        //                 rows={5}
        //                 onChange={(e) => setText(e.target.value)}
        //                 placeholder="What's on your mind?"
        //                 className="w-full resize-none rounded-2xl bg-gray-800/60 p-4 text-sm outline-none border border-white/10 focus:border-cyan-400 transition"
        //             />

        //             <button
        //                 type="button"
        //                 onClick={() => setShow(!show)}
        //                 className="absolute bottom-3 right-3 text-2xl hover:scale-110 transition"
        //             >
        //                 🙂
        //             </button>

        //             {show && (
        //                 <div className="absolute bottom-14 right-0 z-20 overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-lg">
        //                     <EmojiPicker
        //                         onEmojiClick={(emojiData) =>
        //                             setText((t) => t + emojiData.emoji)
        //                         }
        //                         theme="dark"
        //                         previewConfig={{ showPreview: false }}
        //                         width={320}
        //                         height={360}
        //                     />
        //                 </div>
        //             )}

        //         </div>

        //         {/* MEDIA PREVIEW */}
        //         {previewUrl?.length > 0 && (
        //             <div className="grid grid-cols-2 gap-3 mt-5">

        //                 {previewUrl.map((url, index) => {

        //                     const file = mediaFiles[index]
        //                     const type = file.type.split("/")[0]

        //                     return (
        //                         <div
        //                             key={index}
        //                             className="relative overflow-hidden rounded-xl border border-white/10 group"
        //                         >

        //                             <button
        //                                 type="button"
        //                                 onClick={() => removeMedia(index)}
        //                                 className="absolute top-2 right-2 z-10 rounded-full bg-black/60 p-1 opacity-0 group-hover:opacity-100 transition"
        //                             >
        //                                 <RxCross1 size={14} />
        //                             </button>

        //                             {type === "image" && (
        //                                 <img
        //                                     src={url}
        //                                     className="h-40 w-full object-cover"
        //                                 />
        //                             )}

        //                             {type === "video" && (
        //                                 <video
        //                                     src={url}
        //                                     controls
        //                                     className="h-40 w-full object-cover"
        //                                 />
        //                             )}

        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //         )}

        //         {/* ACTION BAR */}
        //         <div className="mt-6 rounded-xl border border-white/10 bg-gray-800/40 p-3">

        //             <p className="text-xs text-gray-400 mb-3">
        //                 Add to your post
        //             </p>

        //             <div className="flex items-center justify-around">

        //                 <input
        //                     onChange={handleMedia}
        //                     name="media"
        //                     type="file"
        //                     id="coverInput"
        //                     accept="image/*,video/*"
        //                     multiple
        //                     className="hidden"
        //                 />

        //                 <label
        //                     htmlFor="coverInput"
        //                     className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-green-400"
        //                 >
        //                     <FaPhotoVideo size={20} />
        //                 </label>

        //                 <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-yellow-400">
        //                     <BsEmojiSunglasses size={20} />
        //                 </span>

        //                 <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-red-400">
        //                     <FaVideo size={20} />
        //                 </span>

        //                 <span className="cursor-pointer rounded-lg p-2 hover:bg-white/10 transition text-blue-400">
        //                     <FaUserTag size={20} />
        //                 </span>

        //             </div>

        //         </div>

        //         {/* POST BUTTON */}
        //         <button
        //             type="submit"
        //             className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold hover:opacity-90 transition"
        //         >
        //             Share Post 🚀
        //         </button>

        //     </form>
        // </div>
        <div
  onClick={handleWrapperClick}
  role="dialog"
  className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4 z-50"
>
  <form
    onSubmit={handlePost}
    className="relative w-full max-w-xl h-[90vh] flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white shadow-2xl overflow-hidden"
  >

    {/* HEADER */}
    <div className="flex items-center justify-between border-b border-white/10 p-4 flex-shrink-0">
      <h2 className="text-lg font-semibold tracking-wide">
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
    <div className="flex-1 overflow-y-auto p-4 space-y-4">

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
          <span className="font-semibold text-sm">
            Mohammad Abu Naim
          </span>
          <select
            name="visibility"
            defaultValue="public"
            className="text-xs bg-gray-800 rounded-md px-2 py-[2px] mt-1 w-fit outline-none"
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
          rows={5}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full resize-none rounded-2xl bg-gray-800/60 p-4 text-sm outline-none border border-white/10 focus:border-cyan-400 transition"
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
        <div className="grid grid-cols-2 gap-3 mt-2">

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
                  <img src={url} className="h-40 w-full object-cover" />
                )}

                {type === "video" && (
                  <video
                    src={url}
                    controls
                    className="h-40 w-full object-cover"
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>

    {/* ACTION BAR */}
    <div className="flex items-center justify-between border-t border-white/10 p-4 flex-shrink-0 bg-gray-900/50 backdrop-blur-md">
      <div className="flex items-center space-x-3">
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

      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 px-6 text-sm font-semibold hover:opacity-90 transition"
      >
        Share
      </button>
    </div>
  </form>
</div>
    );
};

export default PostInput;