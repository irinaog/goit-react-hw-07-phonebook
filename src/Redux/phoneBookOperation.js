import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phoneBookAPI from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
    'phonebook/fetchContacts',
    async () => {
        const response = await phoneBookAPI.fetchContacts();
        return response;
  }
)

