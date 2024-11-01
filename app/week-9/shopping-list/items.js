

export default function Items({item, onSelect}) {
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
        </div>
    );
} 