import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./contacts-actions";
import { parsedContacts } from "../../js/getDataFromLocalStorage";
import { contactsListBase } from "../../components/Phonebook/contactsListBase";
import { chooseData } from "../../js/chooseData";
import { putData } from "../../js/putContactsIntoLocalStorage";

const doFilter = (array, id) => {
  const filteredArray = array.filter((el) => el.id !== id);
  putData(filteredArray);
  return filteredArray;
};

const contacts = createReducer(chooseData(contactsListBase, parsedContacts), {
  [addContact]: (state, { payload }) => {
    putData([...state, payload]);
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => doFilter(state, payload),
  default: (state) => state,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts,
  filter,
});

export default contactsReducer;

// const contacts = (state = chooseData(contactsListBase, parsedContacts), {type, payload}) => {
//     switch(type){
//         case(ADD):
//         const includesContact = state.filter(el => el.name.toLowerCase() === payload.name.toLowerCase())
//         if(includesContact.length > 0) {
//             alert('You have already added this contact!')
//             return state;
//         } else {
//             localStorage.setItem('contacts', makeStringify([...state, payload]))
//             return [...state, payload];
//         }

//         case(DELETE):
//         return doFilter(state, payload);

//         default:
//             return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//     switch(type){
//         case(FILTER):
//         return payload;

//         default:
//             return state;
//     }
// }
