import NavigationContext from "../context/navigation";
import { useContext } from "react";

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
