"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";
import type { NavItem } from "./navigation";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  pathname: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  pathname,
}: MobileNavigationProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-x-0 top-16 bottom-0 z-30 bg-surface lg:hidden",
        isOpen ? "block" : "hidden",
      )}
    >
      <nav aria-label="Mobile" className="flex h-full flex-col px-4 py-6 sm:px-6">
        <ul className="flex flex-1 flex-col gap-1">
          {items.map((item, index) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-md px-3 text-lg font-medium",
                    active ? "text-cobalt" : "text-text",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <DownloadCvButton variant="primary" className="w-full justify-center" />
      </nav>
    </div>
  );
}
