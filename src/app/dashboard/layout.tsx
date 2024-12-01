import React from "react";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Dashboard Layout 嵌套layout
      {children}
    </div>
  );
}
