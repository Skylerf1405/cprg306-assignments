"use client";

import React, { useState } from "react";


export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState(``);
    const [category,setCategory] = useState(`Produce`);

    const increment = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    const decrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: Math.random().toString(36).substring(2, 9),
            name: name,
            category: category,
            quantity: quantity
        }

        onAddItem(item);

        setName(``);
        setCategory(`Produce`);
        setQuantity(1);
    }
    
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <button 
                            type="button" 
                            onClick={increment} 
                            className="text-2xl px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            +
                        </button>
                        <p className="text-2xl font-semibold">{quantity}</p>
                        <button 
                            type="button" 
                            onClick={decrement} 
                            className="text-2xl px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category:</label>
                <select 
                    value={category} 
                    onChange={(event) => setCategory(event.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option defaultValue="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen ">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="House Hold">House Hold</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}