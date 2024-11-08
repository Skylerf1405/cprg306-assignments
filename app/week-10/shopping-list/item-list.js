"use client";
import React, { useState } from "react";
import Items from "./items";



export default function ItemList({ items, onItemSelect, onDeleteItem }) {
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
          <li key={index}>
            <Items item={item} onSelect={onItemSelect} onDelete={onDeleteItem} />
          </li>
        ))}
      </ul>
      </main>
    );
}
