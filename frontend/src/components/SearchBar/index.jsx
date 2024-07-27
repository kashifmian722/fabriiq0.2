import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 text-sm text-white bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MagnifyingGlass className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}