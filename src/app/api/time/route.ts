import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * 测试GET请求缓存问题，注意开发环境不存在缓存，因此需要打包部署后测试
 * 打包后time的值已经固定了（静态），不会再走GET处理函数，可以查看官方文档解决这个问题。
 * npm run build && npm run start
 */

// 解决缓存问题 方式五
export const dynamic = "force-dynamic";

// 解决缓存问题，缓存时效性 方式六 
export const revalidate = 10; // 缓存10秒

export async function GET(request: NextRequest) {
  console.log("GET /api/time");
  const searchParams = request.nextUrl.searchParams; // 解决缓存问题 方式一
  const cookieStore = await cookies(); // 解决缓存问题 方式三
  console.log(cookieStore.get("token"));
  const header = await headers(); // 解决缓存问题 方式四
  console.log(header.get("referrer"));
  return NextResponse.json({
    time: new Date().toLocaleString(),
  });
}

// 解决缓存问题 方式二
export function POST() {}

