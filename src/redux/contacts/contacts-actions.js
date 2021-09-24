import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const ADD = "contacts/add";
const DELETE = "contacts/delete";
const FILTER = "contacts/filter";

export const addContact = createAction(ADD, ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortid.generate(),
    },
  };
});

export const deleteContact = createAction(DELETE);
export const filterContacts = createAction(FILTER);

// const addContact = ({name, number}) => ({
//     type: ADD,
//     payload: {
//         name,
//         number,
//         id: shortid.generate()
//     }
// })

// const deleteContact = id => ({
//     type: DELETE,
//     payload: id
// })

// const filterContacts = value => ({
//     type: FILTER,
//     payload: value
// })
