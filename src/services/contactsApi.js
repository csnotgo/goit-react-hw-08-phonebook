import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// const BASEURL = 'https://63924eaab750c8d178dbe540.mockapi.io/contacts';

export const fetchContacts = async () => {
  const response = await axios.get('contacts');
  return response;
};

export const addContact = async contact => {
  const response = await axios.post('contacts', contact);
  return response;
};

export const deleteContact = async id => {
  const response = await axios.delete(`contacts/${id}`);
  return response;
};
