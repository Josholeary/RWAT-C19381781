import { useState } from "react";

const ContactForm = ({ contactHandler }) => {
  const [contName, setContName] = useState("");
  const [contNum, setContNum] = useState("");
  const [contMail, setContMail] = useState("");

  const nameHandler = (event) => {
    setContName(event.target.value);
  };

  const numHandler = (event) => {
    setContNum(event.target.value);
  };

  const mailHandler = (event) => {
    setContMail(event.target.value);
  };

  const addHandler = () => {
    if (
      contName.trim().length > 0 &&
      contNum.trim().length > 0 &&
      contMail.trim().length > 0 &&
      !isNaN(contNum) &&
      isNaN(contName)
    ) {
      contactHandler(contName, contNum, contMail);
      setContName("");
      setContNum("");
      setContMail("");
    }
  };

  return (
    <div className="contactForm">
      <input
        type="text"
        name="contactName"
        placeholder="Contact Name"
        value={contName}
        onChange={nameHandler}
      />

      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={contNum}
        onChange={numHandler}
      />

      <input
        type="email"
        name="emailAddress"
        placeholder="Email Address"
        value={contMail}
        onChange={mailHandler}
      />

      <button value="Add Contact" onClick={addHandler}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
