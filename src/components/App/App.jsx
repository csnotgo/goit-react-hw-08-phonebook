import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'Redux/operations/userOperation';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';

const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchContactsThunk,
//   addContactsThunk,
//   deleteContactsThunk,
// } from 'Redux/operations/contactsOperation';
// import { filter } from 'Redux/slices/filterSlice';
// import Notiflix from 'notiflix';
// import { Loader } from 'components/Loader/Loader';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { Container } from './App.styled';

// Notiflix.Notify.init({ position: 'center-top', timeout: 1000 });

// export const App = () => {
//   const contacts = useSelector(state => state.contacts.items);
//   const isLoading = useSelector(state => state.contacts.isLoading);
//   const filterValue = useSelector(state => state.filter.value);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContactsThunk());
//   }, [dispatch]);

//   const onFilterChange = e => {
//     dispatch(filter(e.target.value));
//   };

//   const onFilteredContacts = () => {
//     const normalizedFilter = filterValue.toLowerCase();
//     if (contacts?.length !== 0) {
//       const filtredContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//       );
//       return filtredContacts;
//     }
//   };

//   const onFormSubmitState = ({ ...data }) => {
//     const enterName = contacts?.map(contact => contact.name);
//     const enterNumber = contacts?.map(contact => contact.phone);

//     if (enterName.includes(data.name)) {
//       return Notiflix.Notify.failure(`${data.name} is allready in contact`);
//     }
//     if (enterNumber.includes(data.phone)) {
//       return Notiflix.Notify.failure(
//         `This number ${data.phone} is allready in contact`
//       );
//     }
//     dispatch(addContactsThunk(data));
//     Notiflix.Notify.success('Add new contact');
//   };

//   const deleteContact = contactId => {
//     dispatch(deleteContactsThunk(contactId));
//     Notiflix.Notify.success('Delete contact');
//   };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={onFormSubmitState} />

//       <h2>Contacts</h2>
//       <Filter onChange={onFilterChange} value={filterValue} />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <ContactList
//           contacts={onFilteredContacts()}
//           deleteContact={deleteContact}
//         />
//       )}
//     </Container>
//   );
// };
