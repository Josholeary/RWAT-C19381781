import { useState } from "react";
import ContactRow from "./ContactRow";

const ContactTable = ({ contacts, errorHandler, noErrorHandler }) => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  let filterContacts = [...contacts];

  filterContacts = filterContacts.filter((filterContacts) =>
    filterContacts.cnumber.includes(search)
  );

  if (filterContacts.length === 0) {
    errorHandler();
  }

  if (filterContacts.length > 0) {
    noErrorHandler();
  }

  return (
    <div>
      <div className="contactSearch">
        <label for="contactSearch">Search for contact by Mobile No:</label>
        <input
          type="text"
          name="contactSearch"
          value={search}
          onChange={searchHandler}
        />
      </div>
      <h2> Contacts Summary: </h2>
      <div className="contactTable">
        <table>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
          {filterContacts.map((filterContacts) => (
            <ContactRow
              id={filterContacts.id}
              cname={filterContacts.cname}
              cnumber={filterContacts.cnumber}
              cmail={filterContacts.cmail}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
