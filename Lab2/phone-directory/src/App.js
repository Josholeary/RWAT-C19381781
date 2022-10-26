import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import ContactSearch from "./components/ContactSearch";

function App() {
  const [contacts, setContact] = useState([]);

  const addContact = (name, number, mail) => {
    const newContact = {
      id: nanoid(),
      cname: name,
      cnumber: number,
      cmail: mail,
    };
    const contactArr = [...contacts, newContact];
    setContact(contactArr);
    console.log(contactArr);
  };

  return (
    <div className="container">
      <h1> Phone Directory </h1>
      <ContactForm contactHandler={addContact} />
      <ContactSearch />
      <h2> Contacts Summary</h2>
      <ContactTable contacts={contacts} />
    </div>
  );
}

export default App;
