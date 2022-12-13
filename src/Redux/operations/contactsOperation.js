import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/contactsApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
