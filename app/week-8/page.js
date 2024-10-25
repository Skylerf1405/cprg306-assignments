"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page() {
    let itemsArray = itemsData.map( (item) => ( {...item} ) );

    const [itemsList, setitemsList] = useState(itemsArray);

    const [selectedItemName, setSelectedItemName] = useState("");
    
    const handleAddItem = (newItem) => {
        setitemsList([...itemsList, newItem]);
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name   
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, "")
            .split(",")[0]
            .trim();
        setSelectedItemName(cleanedName);
    
    }
    
    return (
        <main className="min-h-screen p-5 bg-gray-100 flex flex-col">
            <h1 className="text-4xl text-center mb-6 text-white bg-black p-3 rounded">Shopping List</h1>
            <div className="flex flex-1">
                <div className="w-1/2 p-5">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={itemsList} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 p-5">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );

}