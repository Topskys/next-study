import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  // TODO：后端登录处理
  return NextResponse.json(
    {
      success: username === password,
      message: username === password ? "登录成功" : "登录失败",
    },
    {
      headers: {
        // 设置cookie，方式一
        "Set-Cookie": `token=${
          username === password ? Math.random().toString(36) : ""
        }; Path=/; Max-Age=86400; HttpOnly`,
      },
    }
  );
  //  const response = NextResponse.json({ success: true, message: "登录成功" });
  // response.headers.set("Set-Cookie", `token=${Math.random().toString(36)}; Path=/; Max-Age=86400; HttpOnly
  // return response
}
