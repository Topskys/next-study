import { Card } from "antd";
import React from "react";
import { data } from "@/data";

export default function page({ params }: { params: { id: string } }) {
  const item = data.find((v) => v.id == +params.id)!;
  return (
    <Card
      title={item?.title}
      extra={''}
    >
      <p>{item.body}</p>
    </Card>
  );
}
