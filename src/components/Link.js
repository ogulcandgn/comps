import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames("text-blue-500");

  const handleClick = (event) => {
    //* command + click yapıldıgında yan sekmede acar
    if (event.metaKey || event.crtlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <div>
      <a className={classes} href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
