import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "abasd",
      label: "Can I use on React Project ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sit ut porro illum ullam exercitationem voluptate modi nihil officiis laboriosam.",
    },
    {
      id: "abasdsd",

      label: "Can I use on JavaScript Project ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sit ut porro illum ullam exercitationem voluptate modi nihil officiis laboriosam.",
    },
    {
      id: "abasd2",
      label: "Can I use on Angular Project ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sit ut porro illum ullam exercitationem voluptate modi nihil officiis laboriosam.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
export default App;
