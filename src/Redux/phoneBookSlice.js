import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    filter: '',
};

const contactSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        addContact (state, action) {state.items=[...state.items,action.payload]},
        deleteContact(state, action) {state.items = state.items.filter(contact => contact.id !== action.payload)},
        filter(state, action) {state.filter = action.payload},
    },
});

export const { addContact, deleteContact, filter } = contactSlice.actions;
export default contactSlice.reducer;

