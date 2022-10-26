import ContactRow from "./ContactRow";

const ContactTable = ({ contacts }) => {
  return (
    <div className="contactTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
        {contacts.map((contacts) => (
          <ContactRow
            id={contacts.id}
            cname={contacts.cname}
            cnumber={contacts.cnumber}
            cmail={contacts.cmail}
          />
        ))}
      </table>
    </div>
  );
};

export default ContactTable;
