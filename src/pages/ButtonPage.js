import { AiFillStar, AiFillHome } from "react-icons/ai";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <Button className="mb-5" primary>
        asdf
      </Button>
      <Button className="mb-5" warning rounded>
        <AiFillStar /> Hi There!
      </Button>
      <Button primary>
        <AiFillHome /> Button Click!
      </Button>
      <h1 className="underline">deneme</h1>
    </div>
  );
}

export default ButtonPage;
