import s from "./Phonebook.module.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

function Phonebook() {
  return (
    <section className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}

export default Phonebook;
