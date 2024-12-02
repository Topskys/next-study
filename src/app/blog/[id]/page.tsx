import { Card } from "antd";
import React from "react";
import { data } from "@/data";

interface IProps {
  params: {
    id: string;
  };
}

// 动态设置元数据
export async function generateMetadata({ params }: IProps) {
  return {
    title: `博客详情-${params.id}`,
  };
}

export default function page({ params }: IProps) {
  const item = data.find((v) => v.id == +params.id)!;
  return (
    <Card title={item?.title} extra={""}>
      <p>{item.body}</p>
    </Card>
  );
}
