import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderedLink = links.map((link, index) => {
    return (
      <div key={index}>
        <Link to={link.path}>{link.label}</Link>
      </div>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLink}
    </div>
  );
}

export default SideBar;
