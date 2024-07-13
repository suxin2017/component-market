import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu, MenuItem } from "@/components/Menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <nav className="">
        <Menu
          style={{
            width: 256,
          }}
        >
          <MenuItem index="button">按钮</MenuItem>
          <MenuItem index="icon">
            <Link href={"/market/icon"}>图标</Link>
          </MenuItem>
          <MenuItem index="menu">菜单</MenuItem>
        </Menu>
      </nav>
      <section>{children}</section>
    </main>
  );
}
