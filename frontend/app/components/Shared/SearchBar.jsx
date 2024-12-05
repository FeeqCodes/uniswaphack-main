'use client'

import React, { useState } from "react";

const SearchBar = ({ placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-[300px] bg-[#291240] text-white pl-10 pr-4 py-2 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-all"
        />
        <svg
          className="absolute left-3 w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 text-gray-400 hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {searchTerm && (
        <div className="absolute w-full mt-2 bg-[#291240] rounded-xl border border-gray-800 shadow-lg overflow-hidden z-50">
          <div className="max-h-[300px] overflow-y-auto">
            {/* Example Results */}
            <div className="p-2 hover:bg-[#644881]/20 cursor-pointer">
              <div className="text-white">MetaVerse Token</div>
              <div className="text-sm text-gray-400">MVT • Active</div>
            </div>
            <div className="p-2 hover:bg-[#644881]/20 cursor-pointer">
              <div className="text-white">DeFi Protocol</div>
              <div className="text-sm text-gray-400">DFP • Upcoming</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
