import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import axios from "axios"


// export const serverAxios = async(url, options = {}) => {
//     const session = await getServerSession(authOptions)
//     console.log(session);

//     const res = await axios({
//         url: `${process.env.NEXT_PUBLIC_API}${url}`,
//         method: options.method || 'GET',
//         data: options.data || {},
//         headers: {
//             Authorization: `Bearer ${session?.accessToken}`
//         }
//     })
//     return res.data.data
// }

// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import { getServerSession } from "next-auth"
// import axios from "axios"

export const serverAxios = async (url, options = {}) => {
  try {
    const session = await getServerSession(authOptions)
    console.log(session);

    if (!session?.accessToken) {
      console.log("No access token")
      return null
    }

    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_API}${url}`,
      method: options.method || "GET",
      data: options.data || {},
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })

    return res.data.data
  } catch (error) {
    console.error("SERVER AXIOS ERROR:", error?.response?.status)
    return null
  }
}