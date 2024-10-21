"use client";
import React, { useState } from "react";



export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

  
    const handleSortByName = () => setSortBy("name");
    const handleSortByCategory = () => setSortBy("category");


    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
      <main className="p-5 bg-white flex flex-col items-center">
      <div className="mb-4 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSortByName}>Sort By Name</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleSortByCategory}>Sort By Category</button>
      </div>

      <ul className="list-none p-0 max-w-xl w-full">
        {sortedItems.map((item, index) => (
        <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-2.5">
          <div className="mb-2.5 text-black">What: {item.name}</div>
          <div className="mb-2.5 text-black">How many: {item.quantity}</div>
          <div className="text-black">Where: {item.category}</div>
        </li>
        ))}
      </ul>
      </main>
    );
}
