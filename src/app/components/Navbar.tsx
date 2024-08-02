"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from 'next/link'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="HOME">
        </MenuItem>
        </Link>
        <Link href={'/Login'}>
        <MenuItem setActive={setActive} active={active} item="LOGIN">
        </MenuItem>
        </Link>
        <Link href={'/Signup'}>
        <MenuItem setActive={setActive} active={active} item="SIGN UP">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
