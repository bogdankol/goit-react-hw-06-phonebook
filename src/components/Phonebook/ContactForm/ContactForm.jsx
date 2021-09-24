import s from "./ContactForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../../redux/contacts/contacts-actions";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactsArray = useSelector(({ contacts: { contacts } }) => contacts);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const state = { name, number };
    if (
      contactsArray.filter(
        (el) => el.name.toLowerCase() === state.name.toLowerCase()
      ).length > 0
    ) {
      alert("You have already added this contact!");
      return;
    }
    dispatch(addContact(state));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <label className={s.label}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={inputHandler}
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number:
        <input
          type="tel"
          name="number"
          onChange={inputHandler}
          value={number}
          className={s.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
