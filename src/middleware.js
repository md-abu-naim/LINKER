import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export const middleware = async (req) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    
    const { pathname } = req.nextUrl
    
    const publicRoutes = ["/login", "/register", "/edit-profile"]
    
    if (!token && !publicRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (token && publicRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    
    return NextResponse.next()
}


export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}