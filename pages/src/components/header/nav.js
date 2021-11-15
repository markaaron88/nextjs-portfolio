import Link from "next/link";
function Nav() {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="https://github.com/markaaron88">
        <a className="mr-5 hover:text-gray-900">Github</a>
      </Link>
      <Link href="https://www.linkedin.com/in/markmariscal/">
        <a className="mr-5 hover:text-gray-900">LinkedIn</a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCiVoUsKtwf3e4sk7xJf_E4A">
        <a className="mr-5 hover:text-gray-900">YouTube</a>
      </Link>
      <Link href="https://leetcode.com/Markaaron/">
        <a className="mr-5 hover:text-gray-900">LeetCode</a>
      </Link>
    </nav>
  );
}
export default Nav;
