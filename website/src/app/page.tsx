import { DemoGreeting } from "@/components/Button";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <DemoGreeting>
        <Link href={"/market"}>Go to component market</Link>
      </DemoGreeting>
    </main>
  );
}
