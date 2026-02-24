import Images from "./Images";

export const metadata = {
  title: "LINKER | | Photos",
  description: "Linker current user's Photos page",
};

const Photos = () => {
    return (
        <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 border border-gray-800 max-w-5xl mx-auto my-2 rounded-2xl backdrop-blur-xl p-4 mb-16 lg:mb-3 shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <h3 className="text-3xl font-bold">Photos</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
                {/* Images */}
                <Images />
                <Images />
                <Images />
                <Images />
                <Images />
                <Images />
                <Images />
            </div>
        </div>
    );
};

export default Photos;