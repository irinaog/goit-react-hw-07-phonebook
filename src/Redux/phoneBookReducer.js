import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filter } from "./phoneBookActions";

// https://62fc9f6b6e617f88de9a7032.mockapi.io/phonebook/contacts

export const itemsReducer = createReducer( [], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});