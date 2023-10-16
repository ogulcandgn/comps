import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPages from "./pages/DropdownPages";
import AccordionPage from "./pages/AccordionPage";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Dropdown</Link>
      <Link to="/">Home Page</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPages />
        </Route>
      </div>
    </div>
  );
}

export default App;
