import { Form, Button } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles.css";

export default function AssignmentControls() {
  return (
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
      <Button variant="danger" size="lg" id="wd-assignment-btn">
        <FaPlus className="me-2" />
        Assignment
      </Button>
    </div>
  );
}
