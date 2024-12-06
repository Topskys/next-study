import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

// GET => /api/articles 请求处理
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  let query = searchParams.get("query") || "";
  const data = db.data.posts;

  let filterData = query
    ? data.filter((v) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...rest } = v;
        return Object.values(rest).some((v) => {
          query = query.toLowerCase();
          return String(v).toLowerCase().includes(query);
        });
      })
    : data;

  const total = filterData.length;
  const startIndex = pageSize * (page - 1);
  const endIndex = Math.min(startIndex + pageSize, total);
  filterData =
    startIndex >= total ? [] : filterData.slice(startIndex, endIndex);

  return NextResponse.json({
    code: 0,
    data: filterData,
    message: "success",
  });
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json();
  const uuid = Math.random().toString(36).slice(-8);
  await db.update(({ posts }) =>
    posts.push({
      id: uuid,
      ...data,
    })
  );
  return NextResponse.json({
    code: 0,
    data: { ...data, uuid },
    message: "success",
  });
}
