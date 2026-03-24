"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-13 items-center">
          {/* Logo/Name - Left */}
          <MainNav />

          <MobileNav />

          {/* Desktop Nav - Right */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            {/* Command Menu - Hidden on mobile */}
            <div className="hidden md:block">
              <CommandMenu />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <div>
                  <ModeSwitcher className="h-[18px] w-[18px]" />
                </div>
              </Button>

              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-[18px] w-[18px]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}