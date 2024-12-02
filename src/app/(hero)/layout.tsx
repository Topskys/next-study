/**
 * 路由组 (路由组)
 * 
 * 作用：
 * 1. 可定义多个根layout
 * 2. 路由组可将功能分模块管理，不影响路由的跳转
 * 3. 多个页面共享一个layout
 */
import Header from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
