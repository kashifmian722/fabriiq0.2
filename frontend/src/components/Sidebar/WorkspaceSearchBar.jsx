import React from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function WorkspaceSearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search workspaces..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  );
}
