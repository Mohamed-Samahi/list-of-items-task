import ListItem from "./list-item"

const ItemsList = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <h1>Items List</h1>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    )
}

export default ItemsList