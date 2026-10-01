"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 w-full transition-all duration-300 ${
          stickyMenu
            ? "border-b border-ink/10 bg-background/80 py-4! shadow-sm backdrop-blur-lg lg:py-0!"
            : "py-7 lg:py-0"
        }`}
      >
        <div className="relative mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link
              href="#home"
              className="text-xl font-extrabold tracking-tight text-ink"
            >
              Erik Larios
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="block lg:hidden"
              aria-label="Toggle navigation"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-ink delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-ink delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-ink duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-auto ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md border border-ink/10 bg-background p-7.5 shadow-lg"
                : ""
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
                {menuData.map((menuItem, key) => (
                  <li key={key} className="nav__menu group relative">
                    <Link
                      href={`${menuItem.path}`}
                      onClick={() => setNavigationOpen(false)}
                      className={`relative rounded-full border border-transparent px-4 py-1.5 text-base hover:bg-surface/60 hover:text-ink ${
                        pathUrl === menuItem.path
                          ? "bg-surface/60 text-ink"
                          : "text-ink/70"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-7 flex items-center gap-6 lg:mt-0 lg:ml-6">
              <Link
                href="/resume/Erik-Larios-Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4.5 py-2 text-base font-medium text-background hover:opacity-85"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
