

export default function ItemList() {
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

    return (
        <main style={{ 
            padding: "20px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center" }}>
            <ul style={{ 
                listStyleType: "none", 
                padding: 0, 
                maxWidth: "600px", 
                width: "100%" }}>
                {[item1, item2, item3, 
                item4, item5, item6, 
                item7, item8, item9, 
                item10, item11, item12].map((item, index) => (
                    <li key={index} style={{ 
                        backgroundColor: "#fff",
                        padding: "15px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        marginBottom: "10px" }}>
                        <div style={{ marginBottom: "10px" }}>What: {item.name}</div>
                        <div style={{ marginBottom: "10px" }}>How many: {item.quantity}</div>
                        <div>Where: {item.category}</div>
                    </li>
                ))}
            </ul>
        </main>
    );

}