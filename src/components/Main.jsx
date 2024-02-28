import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './Main.module.scss';

function Main() {
    const [inputValue, setInputValue] = useState('');
    const [todoItemsArray, setTodoItemsArray] = useState(JSON.parse(localStorage.getItem('todoItems')) || []);

    let sortedArray = [...todoItemsArray];
    sortedArray.sort((a, b) => a.isDone - b.isDone);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodoItem = {
            id: uuidv4(),
            task: inputValue,
            isDone: false
        };
        setTodoItemsArray([...todoItemsArray, newTodoItem])
        setInputValue('');
    }

    const handleChange = (id) => {
        setTodoItemsArray(todoItemsArray.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item))
    }

    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(todoItemsArray));
    }, [todoItemsArray]);

    return (
        <div className={styles.main}>
            <ul>
                {
                    sortedArray.map((item, index) => (
                        <li key={item.id}>
                            <label className={item.isDone ? styles.active : ''}
                                   htmlFor={`todo-item-${item.id}`}>{item.task}</label>
                            <input id={`todo-item-${item.id}`} type="checkbox" onChange={() => handleChange(item.id)}
                                   checked={item.isDone}/>
                        </li>
                    ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button type="submit">Додати</button>
            </form>
        </div>
    );
}

export default Main;