import axios from "axios"
import { getSession } from "next-auth/react";


const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

axiosSecure.interceptors.request.use(async (config) => {
    const session = await getSession()

    if (session?.accessToken) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${session.accessToken}`
    }

    return config
}, (error) => Promise.reject(error)
)

export default axiosSecure;

