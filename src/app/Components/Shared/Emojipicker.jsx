"use client"
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Emojipicker = () => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    const handleWrapperClick = (e) => {
        const emojiBtn = e.target.closest('.emoji-btn')
        const emojiContainer = e.target.closest('.emoji-container')

        if (emojiBtn || emojiContainer) return
        setShow(false)
    }
    return (
        <div>
            <button onClick={() => setShow(!show)} title="Emoji" className="emoji-btn text-3xl rounded-full transition-transform duration-200 hover:scale-125 hover:rotate-6">
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
    );
};

export default Emojipicker;