import ListItem from "./ListItem.jsx";
import {useSelector} from "react-redux";

const List = () => {
    const items = useSelector(state => state.items)

    let sortedItems = [...items];
    sortedItems.sort((a, b) => a.isDone - b.isDone);

    return (
        <ul>
            {
                sortedItems.map((item) => (
                    <ListItem key={item.id} item={item}/>
                ))}

        </ul>
    );
};

export default List;
