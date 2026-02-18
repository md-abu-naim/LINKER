export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /*
      Protect everything except:
      - /login
      - /register
      - /api
      - static files
    */
    "/((?!login|register|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
