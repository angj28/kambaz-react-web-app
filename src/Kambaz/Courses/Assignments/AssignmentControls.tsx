import { Form, Button } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles.css";
import ProtectedFaculty from "../../ProtectedFaculty";
import { useNavigate, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const addAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/${uuidv4()}`);
  };
  return (
    <ProtectedFaculty studentAccess={<></>}>
      <div
        id="wd-assignment-controls"
        className="d-flex align-items-center gap-2"
      >
        <Form.Group className="w-auto" style={{ maxWidth: "400px" }}>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <Form.Control
              placeholder="Search..."
              id="wd-search-assignment"
              className="custom-search-input"
              size="lg"
            />
          </div>
        </Form.Group>
        <Button size="lg" className="btn-secondary" id="wd-group-btn">
          <FaPlus className="me-2" />
          Group
        </Button>
        <Button
          variant="danger"
          size="lg"
          id="wd-assignment-btn"
          onClick={addAssignment}
        >
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </ProtectedFaculty>
  );
}
