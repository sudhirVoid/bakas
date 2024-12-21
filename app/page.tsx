import Image from "next/image";
import { AppSidebar } from "@/components/app-sidebar";
export default function Home() {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        <div>Hi this is home page</div>
      </main>
    </div>
  );
}
