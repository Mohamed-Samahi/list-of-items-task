import ListItem from "./list-item"

const ItemsList = () => {
    return (
        <div className="flex flex-col items-start w-full h-full gap-4 overflow-y-auto">
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
            <ListItem title="Title of the Item" description="This is the description of an item in the list" id={"10"} />
        </div>
    )
}

export default ItemsList