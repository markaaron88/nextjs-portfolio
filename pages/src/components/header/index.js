import Link from "next/link";
import Nav from "./nav";

function Header() {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="./imgs/icons.png"
            />
            <span className="ml-3 text-xl">Mark Mariscal</span>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
