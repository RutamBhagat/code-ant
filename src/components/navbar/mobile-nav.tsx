"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { footerItems, navigationItems } from "./nav-items";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(
    "UtkarshDhairyaPanwar",
  );

  return (
    <header className="flex items-center justify-between p-4 pb-6 lg:hidden">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="CodeAnt AI Logo" width={29} height={32} />
        <span className="text-2xl leading-6">CodeAnt AI</span>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full p-0">
          <div className="flex h-full flex-col">
            {/* Sheet Header */}
            <div className="flex items-center justify-between p-4 pb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="CodeAnt AI Logo"
                  width={29}
                  height={32}
                />
                <span className="text-2xl">CodeAnt AI</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* User Select */}
            <div className="px-4">
              <Select value={selectedUser} onValueChange={setSelectedUser}>
                <SelectTrigger className="w-full rounded-md bg-white px-3 text-base hover:bg-gray-50">
                  <SelectValue placeholder="Select a username" />
                </SelectTrigger>
                <SelectContent className="w-full min-w-[200px]">
                  <SelectGroup>
                    <SelectLabel className="px-2 py-1.5 text-sm font-medium text-gray-500">
                      Username
                    </SelectLabel>
                    <SelectItem
                      value="UtkarshDhairyaPanwar"
                      className="cursor-pointer px-2 py-1.5 hover:bg-gray-50"
                    >
                      UtkarshDhairyaPanwar
                    </SelectItem>
                    <SelectItem
                      value="RutamBhagat"
                      className="cursor-pointer px-2 py-1.5 hover:bg-gray-50"
                    >
                      RutamBhagat
                    </SelectItem>
                    <SelectItem
                      value="KunalKushwaha"
                      className="cursor-pointer px-2 py-1.5 hover:bg-gray-50"
                    >
                      KunalKushwaha
                    </SelectItem>
                    <SelectItem
                      value="HarkiratSingh"
                      className="cursor-pointer px-2 py-1.5 hover:bg-gray-50"
                    >
                      HarkiratSingh
                    </SelectItem>
                    <SelectItem
                      value="PiyushGoyal"
                      className="cursor-pointer px-2 py-1.5 hover:bg-gray-50"
                    >
                      PiyushGoyal
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 pb-6 pt-3">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-4" />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer Items */}
              <div className="mt-auto">
                <div className="space-y-1">
                  {footerItems.map((item) =>
                    item.url ? (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-4" />
                        {item.title}
                      </Link>
                    ) : (
                      <button
                        key={item.title}
                        onClick={async () => {
                          setIsOpen(false);
                          void item.onClick?.();
                        }}
                        className="text-md flex w-full items-center gap-3 rounded-md px-3 py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                      >
                        <item.icon className="h-5 w-4" />
                        {item.title}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
