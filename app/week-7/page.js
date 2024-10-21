"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {
    let itemsArray = itemsData.map( (item) => ( {...item} ) );

    const [itemsList, setitemsList] = useState(itemsArray);
    
    const handleAddItem = (newItem) => {
        setitemsList([...itemsList, newItem]);
    }
    
    return (
        <main>
            <h1 className="text-4xl p-5 text-white bg-black flex justify-center">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemsList}/>
        </main>
    );

}