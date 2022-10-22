import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";

function App() {
  return (
    <div className="container">
      <h1> Phone Directory </h1>
      <ContactForm />
      <ContactTable />
    </div>
  );
}

export default App;
