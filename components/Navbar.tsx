"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-4">
        <Image src="/churchlogo.png" alt="Church Logo" width={80} height={80} priority />
        <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">Welcome</span>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Home</Link>
        <Link href="/sermons" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Sermons</Link>
        <Link href="/events" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Events</Link>
        <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">About Us</Link>
        <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Contact Us</Link>
      </div>

      {/* Dark mode toggle */}
      <ThemeToggle />
    </nav>
  );
}
