import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import NoResult from "./components/NoResult";

function App() {
  const [contacts, setContact] = useState([]);
  const [empty, setEmpty] = useState(false);

  const addContact = (name, number, mail) => {
    const newContact = {
      id: nanoid(),
      cname: name,
      cnumber: number,
      cmail: mail,
    };
    const contactArr = [...contacts, newContact];
    setContact(contactArr);
  };

  const error = () => {
    setEmpty(true);
    console.log(empty);
  };

  const noError = () => {
    setEmpty(false);
    console.log(empty);
  };

  return (
    <div className="container">
      <h1> Phone Directory </h1>
      <ContactForm contactHandler={addContact} />
      <ContactTable
        contacts={contacts}
        errorHandler={error}
        noErrorHandler={noError}
      />
      {empty && <NoResult />}
    </div>
  );
}

export default App;
