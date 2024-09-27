"use client";

import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    const decrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <button onClick={increment} className="text-4xl px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 ">
                        +
                    </button>
                    <p className="text-4xl font-semibold">{quantity}</p>
                    <button onClick={decrement} className="text-4xl px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600">
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}