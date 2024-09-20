

export default function Items() {
    let items = {
            name: "Skyler",
            quantity: 1,
            category: "Food",
        }
        
    return (
        <main>
            <div>
                <li>{items.name}</li>
                <li>{items.quantity}</li>
                <li>{items.category}</li>
            </div>
        </main>
    );
}