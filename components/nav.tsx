import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-15 px-4 md:px-6 lg:px-8 relative">
        {/* 네비게이션 메뉴 */}
        <div className="md:flex space-x-20 mx-auto">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                MyWebsite
            </Link>
        </div>
        <div className="hidden md:flex space-x-20 mx-auto relative">
          <Link href="#" className="relative text-black-500 hover:text-blue-700 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:h-1 after:bg-blue-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Resume</Link>
        </div>
        <div className="hidden md:flex space-x-20 mx-auto relative">
          <Link href="#" className="relative text-black-500 hover:text-blue-700 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:h-1 after:bg-blue-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Project</Link>
        </div>
        <div className="hidden md:flex space-x-20 mx-auto relative">
          <Link href="#" className="relative text-black-500 hover:text-blue-700 after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:h-1 after:bg-blue-500 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Blog</Link>
        </div>
        <div className="hidden md:flex space-x-20 mx-auto">
          <Link href="#" className="text-black-500">toggle</Link>
        </div>

        {/* 모바일 메뉴 */}
        <div className="md:hidden">
          <button className="text-gray-900 dark:text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}
