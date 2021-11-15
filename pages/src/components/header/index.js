import Link from "next/link";
import Nav from "./nav";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
function Header() {
  const { SystemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // const renderThemeChanger = () => {
  //   if (!mounted) return null;
  //   const currentTheme = theme === "system" ? SystemTheme : theme;

  //   if (currentTheme === "dark") {
  //     return (
  //       <SunIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <SunIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };
  return (
    <header className="text-gray-600 body-font dark:border-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="./imgs/icons.png"
              alt=""
            />
            <span className="ml-3 text-xl">Mark Mariscal</span>
          </a>
        </Link>
        <Nav />
        {/* {renderThemeChanger()} */}
      </div>
    </header>
  );
}
export default Header;
