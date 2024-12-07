import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  // 方式二，路径重写
  NextResponse.rewrite(new URL("/about", request.nextUrl));
}

// 匹配哪些请求路由会被中间件拦截 方式一
export const config = {
  matcher: ["/about/:path*", "/blog"],
};
