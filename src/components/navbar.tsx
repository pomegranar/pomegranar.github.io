"use client";
import { TabNav } from "@radix-ui/themes";

export function NavBar() {
  return (
      <div className="flex flex-col items-center">
        <TabNav.Root size="2" justify="center" className="rounded-b-xl border-b max-w-3xl backdrop-blur-lg bg-gradient-to-b from-background to-background/60">
          <TabNav.Link href="#" active>
              Миний Тухай
          </TabNav.Link>
          <TabNav.Link href="#">Өмнөх ажил</TabNav.Link>
          <TabNav.Link href="#">Зураглал</TabNav.Link>
          <TabNav.Link href="#">Холбогдох</TabNav.Link>
      </TabNav.Root>
      </div>
  );
}
