import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {todoActions} from "../store/index.js";

function Form() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            task: inputValue,
            isDone: false
        };
        dispatch(todoActions.addNewItem(newItem))
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button type="submit">Додати</button>
        </form>
    );
}

export default Form;