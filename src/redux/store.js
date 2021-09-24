
import contactsReducer from './contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
})

export default store;