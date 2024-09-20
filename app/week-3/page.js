import ItemList from "./item-list";


export default function Page() {
    return (
        <main>
            <h1 style={{
                    fontSize: "35px",
                    padding: "20px",
                    color: "white",
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center"}}>
                    Shopping List
                    </h1>
            <ItemList />
        </main>
    );

}