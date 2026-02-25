
export const useImageUrl = () => {
    
    const createImageUrl = (file) => {
        return URL.createObjectURL(file)
    }

    const revokeImageUrl = (url) => {
        console.log(url);
        if(url) URL.revokeObjectURL(url)
    }

    return {createImageUrl, revokeImageUrl}
}