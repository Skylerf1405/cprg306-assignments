

export default function Items({item, onSelect, onDelete}) {
    let items = {
            name: "Skyler",
            quantity: 1,
            category: "Food",
        }

    
        
    return (
        <div onClick={() => onSelect(item)} className="p-4 rounded-lg shadow-md mb-2.5 cursor-pointer bg-gray-100">
            <div className="mb-2.5 text-black">What: {item.name}</div>
            <div className="mb-2.5 text-black">How many: {item.quantity}</div>
            <div className="text-black">Where: {item.category}</div>
            <button 
                type="button" 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                }}>
                Delete
            </button>
        </div>
    );
} 