import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navItems = [
    "Home",
    "About",
    "Services",
    "Exams",
    "Resources",
    "Testimonials",
    "Contact",
    "FAQs",
  ];

  // NavItem component for desktop
  const DesktopNavItem = ({ item }) => (
    <li
      className="relative cursor-pointer transition-colors duration-300 px-3 py-2 ui"
      onClick={() => setActiveItem(item)}
    >
      <span
        className={`text-base font-medium ${
          activeItem === item
            ? "text-blue-500"
            : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`}
      >
        {item}
      </span>
      <span
        className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform ${
          activeItem === item ? "scale-x-100" : "scale-x-0"
        } origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100`}
      ></span>
    </li>
  );

  // NavItem component for mobile
  const MobileNavItem = ({ item }) => (
    <li
      className="relative cursor-pointer w-full py-4 border-b-2 border-zinc-100 dark:border-zinc-800 "
      onClick={() => setActiveItem(item)}
    >
      <span
        className={`text-lg ${
          activeItem === item
            ? "text-blue-500 font-medium"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        {item}
      </span>
    </li>
  );

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text ui">
            YashAradhye
          </span>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-1 lg:gap-2 items-center">
          {navItems.map((item) => (
            <DesktopNavItem key={item} item={item} />
          ))}
          <Button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </ul>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-800 dark:text-zinc-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-zinc-200 dark:border-zinc-800"
          >
            <nav className="flex flex-col h-full pt-12">
              <ul className="flex flex-col w-full text-center ui">
                {navItems.map((item) => (
                  <MobileNavItem key={item} item={item} />
                ))}
              </ul>
              <Button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
