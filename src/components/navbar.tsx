"use client";
import { TabNav } from "@radix-ui/themes";

export function NavBar() {
  return (
        <TabNav.Root size="2" justify="center" className="backdrop-blur-lg bg-gradient-to-b from-background to-background/60">
          <TabNav.Link href="#" active>
              About Anar
          </TabNav.Link>
          <TabNav.Link href="#">Projects</TabNav.Link>
          <TabNav.Link href="#">Photography</TabNav.Link>
          <TabNav.Link href="#">Work</TabNav.Link>
      </TabNav.Root>
  );
}
