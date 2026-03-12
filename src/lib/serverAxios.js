// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import axios from "axios"
// import { getServerSession } from "next-auth"

// export const serverAxios = async (url, options = {}) => {
//     console.log(url, options);

//     const session = await getServerSession(authOptions)

//     const res = await axios({
//         url: `${process.env.NEXT_PUBLIC_API}${url}`,
//         method: options.method || "GET",
//         data: options.data || {},
//         headers: {
//             Authorization: `Bearer ${session?.accessToken}`
//         }
//     })
//     console.log('from server ', res.data);

//     return await res.data
// }
