import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/header";
import SideBarMobile from "@/components/sidebar/sidebarMobile";
import HeaderMobile from "@/components/header/headerMobile";

export const metadata: Metadata = {
  title: "Видеохостинг - Flix",
  description: "Сайт видеохостинга Flix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white">
        <div className="flex h-full w-full">
          <div id="page" className="h-[3000px]">
            <HeaderMobile />
            <Header />
            <div className="tablet-s:ml-[84px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
