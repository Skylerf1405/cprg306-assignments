import ItemList from "./item-list";


export default function Page() {
    return (
        <main>
            <h1 className="text-4xl p-5 text-white bg-black flex justify-center">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );

}