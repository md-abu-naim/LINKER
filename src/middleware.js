import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {

    const token = await getToken({ req })
    const isTokenOk = Boolean(token)
    const protectedRout = req.nextUrl.pathname.startsWith('/')

    // if(protectedRout){
    //     const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
    //     return NextResponse.redirect(new URL(callbackUrl, req.url))
    // }

    return NextResponse.next()
}