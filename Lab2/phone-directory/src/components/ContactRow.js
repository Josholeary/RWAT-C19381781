const ContactRow = ({ cname, cnumber, cmail }) => {
  return (
    <tr>
      <td>{cname}</td>
      <td> {cnumber}</td>
      <td> {cmail}</td>
    </tr>
  );
};

export default ContactRow;
