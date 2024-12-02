"use client"
import { Avatar, List } from "antd";
import React from "react";
import { data } from "@/data";
import Link from "next/link";

export default function page() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(v, i) => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`}
                />
              }
              title={<Link href={`/blog/${v.id}`}>{v.title}</Link>}
              className="!items-center"
            />
          </List.Item>
        );
      }}
    />
  );
}
