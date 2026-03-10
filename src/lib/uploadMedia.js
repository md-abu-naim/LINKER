import axios from "axios"

export const uploadMedia = async (file, onProgress) => {

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "linker_upload")

    const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcqnddytj/auto/upload",
        formData,
        {
            onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                )
                if (onProgress) onProgress(percent)
            }
        }
    )

    return {
        url: res.data.secure_url,
        type: res.data.resource_type
    }
}