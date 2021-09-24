import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/contacts-actions";

function ContactList() {

  const getContactsList = useSelector(({ contacts: { contacts } }) => contacts);
  const getFilter = useSelector(({ contacts: { filter } }) => filter);

  const dispatch = useDispatch();
  const listToRender = getContactsList.filter(el => el.name.toLowerCase().includes(getFilter.toLowerCase()))

  console.log()

  return (
    <ul className={s.list}>
      {listToRender.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s.btn}
            >
              delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
