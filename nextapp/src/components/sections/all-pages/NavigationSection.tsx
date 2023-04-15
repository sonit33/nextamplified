import Image from "next/image";
import Link from "next/link";

export default function NavigationSection() {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex justify-between md:max-w-4xl lg:max-w-6xl items-center">
        <div className="p-2">
          <Image src="/main-logo.png" alt="BitMaple logo" height={50} width={103} />
        </div>
        <div className="px-8 justify-start hidden md:flex">
          <ul className="flex sm:space-x-2 md:space-x-4 lg:space-x-6">
            <li>
              <Link href="/" className="px-4 py-2 text-black hover:bg-black hover:text-brand hover:rounded">
                Home
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="px-4 py-2 text-black  hover:bg-black hover:text-brand hover:rounded">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="px-4 py-2 text-black hover:bg-black hover:text-brand hover:rounded">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/enroll-now" className="px-4 py-2 text-black hover:bg-black hover:text-brand hover:rounded">
                Enroll Now
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="px-4 py-2 hover:bg-black hover:text-brand hover:rounded">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
