import axios from "axios"
import { getSession } from "next-auth/react";


const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

// Request Interceptor
axiosSecure.interceptors.request.use(async (config) => {
    const session = await getSession()

    if (session?.accessToken) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${session.accessToken}`
    }

    return config
}, (error) => Promise.reject(error))


// Response interceptor
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {

    if (error.response?.status === 401 || error.response?.status === 403) {
      await signOut({ callbackUrl: "/login" })
    }

    return Promise.reject(error)
  }
)

export default axiosSecure;

