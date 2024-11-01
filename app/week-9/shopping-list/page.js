"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";


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

    const {user} = useUserAuth();
    
    return (
        <main className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 p-4 shadow-md">
                <h1 className="text-center text-3xl text-white">Shopping List</h1>
            </header>

            {user ? (
                <div className="container mx-auto p-5">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-4xl text-center mb-6 text-gray-800">Shopping List</h1>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <NewItem onAddItem={handleAddItem} />
                                <ItemList items={itemsList} onItemSelect={handleItemSelect} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <MealIdeas ingredient={selectedItemName} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto p-5 text-center">
                    <p className="text-red-500 mb-4">You must be logged in to view this page</p>
                    <Link href="/week-9/">
                        <p className="text-blue-500 underline">Sign In</p>
                    </Link>
                </div>
            )}
        </main>
    );

}