import {configureStore, createSlice} from "@reduxjs/toolkit";

const persistedState = localStorage.getItem('todoItems')
    ? JSON.parse(localStorage.getItem('todoItems'))
    : [];

const todoSlice = createSlice({
    name: 'Todo list',
    initialState: {
        items: persistedState
    },
    reducers: {
        addNewItem(state, action) {
            state.items.push(action.payload);
        },
        setIsDone(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].isDone = !action.payload.isDone;
            }
        }
    }
})

const store = configureStore({
    reducer: todoSlice.reducer
});

store.subscribe(() => {
    localStorage.setItem('todoItems', JSON.stringify(store.getState().items))
})

export const todoActions = todoSlice.actions;

export default store;