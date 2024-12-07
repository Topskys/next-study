import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/login") {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// 匹配哪些请求路由会被中间件拦截 方式一
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.icon).*)"],
};
