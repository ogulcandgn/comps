import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
