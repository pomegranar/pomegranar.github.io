"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AspectRatio, Em, Text } from "@radix-ui/themes";
// import { Text } from "@radix-ui/themes";

export default function Home() {
  const { theme, systemTheme } = useTheme();

  // If you want to "always show exactly what the OS says":
  const effectiveTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  // 1) On first render (server + hydration), mounted = false.
  // 2) As soon as the component runs in the browser, useEffect(() => setMounted(true)).
  useEffect(() => {
    setMounted(true);
  }, []);

  // Until we're "mounted" in the browser, do NOT pick dark/light image.
  // Instead, render a neutral placeholder (or nothing) so SSR matches client's first HTML.
  if (!mounted) {
    return (
      <main className="flex items-center justify-center h-screen">
        {/* e.g. a transparent div, a spinner, or a default low‐res image */}
        <div
          style={{ width: 300, height: 200, backgroundColor: "#77777700" }}
        />
      </main>
    );
  }
  return (
    <main className="">
      <div className="absolute top-0">
        <div className="w-[100vw] h-[400px] relative flex items-center justify-around bg-blend-normal bg-gradient-to-b from-transparent to-background/80 in">
          <Image
            src={effectiveTheme === "dark" ? "/metro.jpg" : "/beach.jpg"}
            alt={effectiveTheme === "dark" ? "Dark metro" : "Sunny beach"}
            fill
            priority={true}
            className="object-cover -z-10"
          />
          <div className="relative flex flex-col items-baseline">
            <Text size="7" className="text-white/80 drop-shadow-lg font-bold">
              Нямбаярын
            </Text>
            <Text size="9" className=" text-white drop-shadow-xl font-black anar-title font-stretch-extra-expanded">
              Анар
            </Text>
            <br/>
            <Text className="text-green-700 dark:text-orange-400">Веб, хиймэл оюун ухааны систем хөгжүүлэгч</Text>
            {/*<Em>Веб болон хиймэл оюун ухаант систем хөгжүүлэгч</Em>*/}
          </div>
          <div className="w-[250px] h-[250px]">
          <AspectRatio ratio={1} className="">
            <Image
              src="/anar.png"
              alt="Portrait of Anar."
              width={700}
              height={700}
              className="object-fill rounded-2xl shadow-xl "
            />
          </AspectRatio>
          </div>
        </div>
      </div>
    </main>
  );
}
