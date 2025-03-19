import { Button } from "antd";
import { Link } from "react-router";

export default function TasksBackBtn(props: any) {
  return (
    <Link to="/">
      <Button className="backBtn" type="primary">
        ←
      </Button>
    </Link>
  );
}
