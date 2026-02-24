'use client'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const Memories = () => {
    const [open, setOpen] = useState(false);
    const images = [
        'https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp',
        'https://i.postimg.cc/h4M3nDFf/Rose-Petal-Hydrating-Face-Mist.jpg',
        'https://i.postimg.cc/0NmB17xs/Herbal-Strengthening-Hair-Oil.webp',
        'https://i.postimg.cc/WbbCqDmG/Cocoa-Butter-Body-Lotion.jpg',
        'https://i.postimg.cc/x1B4Ztw5/Exfoliating-Coffee-Body-Scrub.webp',
    ]
    return (
        <div>
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "/image1.jpg" },
                    { src: "/image2.jpg" },
                    { src: "/image3.jpg" },
                ]}
            />
        </div>
    );
};

export default Memories;