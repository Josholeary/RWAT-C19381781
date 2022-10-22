const ContactForm = () => {
  return (
    <div className="contactForm">
      <form>
        <input type="text" name="contactName" placeholder="Contact Name" />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" />
        <input type="email" name="emailAdress" placeholder="Email Address" />
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};

export default ContactForm;
