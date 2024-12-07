"use client"
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const logout = async () => {
    await fetch("/api/logout", { method: "DELETE" });
    router.push("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      Dashboard Page
      <Button onClick={logout} type="primary">
        Logout
      </Button>
    </div>
  );
}
