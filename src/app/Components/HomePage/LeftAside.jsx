import Image from "next/image";
import { MdNotListedLocation } from "react-icons/md";

const LeftAside = () => {
    return (
        <div>
            <div className="shadow-lg rounded-sm border border-gray-800">
                <img src="https://media.licdn.com/dms/image/v2/D5616AQE2TwXDs2Qemw/profile-displaybackgroundimage-shrink_350_1400/B56ZoB1IxAHAAY-/0/1760967299566?e=1763596800&v=beta&t=z5f43QH9GDAb4R3tdGs5KvIXbWqdOnB7Cuso70ZSSCc" alt="Cover" width={300} height={250} className="w-full h-full object-cover rounded-t-2xl" />
                <div className="-mt-6 flex flex-col items-center p-3">
                    <Image src="https://i.postimg.cc/65X8XRRf/Face-Care.png" alt="" width={100} height={100} className="h-28 w-28 rounded-full border-4 border-green-500 object-cover" />
                    <h3 className="text-2xl font-bold">Mohammad Abu Naim</h3>
                    <p className="text-gray-400 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quas magnam cum fugit ipsa, eos consequatur quia molestiae excepturi officiis.</p>
                    <address className="flex items-center gap-2">
                        <span><MdNotListedLocation /></span>
                        <small>Noakhali, Chittagang, Bangladesh</small>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default LeftAside;