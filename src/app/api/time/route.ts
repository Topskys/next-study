import { NextResponse } from "next/server";

/**
 * 测试GET请求缓存问题，注意开发环境不存在缓存，因此需要打包部署后测试
 * 打包后time的值已经固定了（静态），不会再走GET处理函数，可以查看官方文档解决这个问题。
 */
export function GET() {
  return NextResponse.json({
    time: new Date().toLocaleString(),
  });
}
