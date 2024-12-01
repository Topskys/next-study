import React from "react";

/**
 * 根模板组件，layout --> template --> page
 * 
 * @param children - 子元素
 * @returns 返回根模板组件的 JSX 元素
 */
export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      App template
      {children}
    </div>
  );
}
