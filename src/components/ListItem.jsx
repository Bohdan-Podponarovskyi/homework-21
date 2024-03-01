import styles from './Main.module.scss';
import {useDispatch} from "react-redux";
import {todoActions} from "../store/index.js";

function ListItem({ item }) {
    console.log(item)
    const dispatch = useDispatch();

    const handleChange = (id) => {
        dispatch(todoActions.setIsDone({ id: item.id, isDone: item.isDone }))
        console.log(id)
    }

    return (
        // eslint-disable-next-line react/prop-types
        <li key={item.id}>
            <label className={item.isDone ? styles.active : ''}
                   htmlFor={`todo-item-${item.id}`}>{item.task}</label>
            <input id={`todo-item-${item.id}`} type="checkbox" onChange={() => handleChange(item.id)}
                   checked={item.isDone}/>
        </li>
    );
}

export default ListItem;