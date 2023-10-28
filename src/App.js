import Route from "./components/Route";
import DropdownPages from "./pages/DropdownPages";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPages />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modals">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
