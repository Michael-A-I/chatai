import React from "react"
import Link from "next/link" // Assuming you're using React Router
import { signOut } from "next-auth/react"

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white w-64">
      <div className="py-4 px-6 border-b border-gray-300">
        <h1 className="text-lg font-semibold">Sidebar Naviigation</h1>
      </div>
      <div className="py-4 px-6">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-blue-500 hover:text-blue-700">
              Products
            </Link>
          </li>
          <li>
            <Link onClick=>{signOut} </li>className="text-blue-500 hover:text-blue-700">
              Sign Out
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
