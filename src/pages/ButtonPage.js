import { AiFillStar, AiFillHome } from "react-icons/ai";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <Button className="mb-5" primary onMouseEnter={handleClick}>
        asdf
      </Button>
      <Button className="mb-5" warning rounded onMouseLeave={handleClick}>
        <AiFillStar /> Hi There!
      </Button>
      <Button onClick={handleClick} primary>
        <AiFillHome /> Button Click!
      </Button>
      <h1 className="underline">deneme</h1>
    </div>
  );
}

export default ButtonPage;
