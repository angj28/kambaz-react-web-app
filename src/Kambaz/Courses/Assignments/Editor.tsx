import { Form, Button, Row, Col } from "react-bootstrap";
import "../../styles.css";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database/Index";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );

  return (
    <div id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <Form.Group id="wd-name">
          <Form.Label>
            <b>Assignment Name</b>
          </Form.Label>
          <Form.Control
            className="mb-2"
            type="text"
            value={assignment ? assignment.title : ""}
          />
        </Form.Group>

        {/* Assignment Description */}
        <Form.Group id="wd-description">
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control
            className="mb-3"
            as="textarea"
            rows={3}
            value={assignment ? assignment.description : ""}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} id="wd-points">
          <Form.Label column sm={3}>
            <b> Points</b>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              className="mb-4"
              type="number"
              value={assignment ? assignment.points : 0}
            />
          </Col>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group as={Row} id="wd-group">
          <Form.Label column sm={3}>
            <b>Assignment Group</b>
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {/* Display Grade As */}
        <Form.Group as={Row} id="wd-display-grade-as">
          <Form.Label column sm={3}>
            <b>Display Grade as</b>
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select">
              <option value="PERCENTAGE">Percentage</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group as={Row} id="wd-submission-type">
          <Form.Label column sm={3}>
            <b>Submission Type</b>
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select">
              <option value="ONLINE">Online</option>
            </Form.Control>
            <br />
            <b>Online Entry Options</b>
            <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
            <Form.Check
              type="checkbox"
              label="Website URL"
              id="wd-website-url"
            />
            <Form.Check
              type="checkbox"
              label="Media Recordings"
              id="wd-media-recordings"
            />
            <Form.Check
              type="checkbox"
              label="Student Annotation"
              id="wd-student-annotation"
            />
            <Form.Check
              type="checkbox"
              label="File Uploads"
              id="wd-file-upload"
            />
            <br />
          </Col>
        </Form.Group>

        {/* Assign To */}
        <Form.Group as={Row} controlId="wd-assign-to">
          <Form.Label column sm={3}>
            <b>Assign to</b>
          </Form.Label>
          <Col sm={9}>
            <div className="fake-multiselect">
              <Button variant="secondary" className="multiselect-tag">
                Everyone X
              </Button>
            </div>

            <b>Due</b>
            <Form.Control
              className="mb-2"
              type="date"
              value={assignment ? assignment.dueDate : ""}
            />

            <Row>
              <Col sm={6}>
                <Form.Label>
                  <b>Available From</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={assignment ? assignment.availableDate : ""}
                  id="wd-available-from"
                />
              </Col>
              <Col sm={6}>
                <Form.Label>
                  <b>Until</b>
                </Form.Label>
                <Form.Control
                  type="date"
                  value={assignment ? assignment.dueDate : ""}
                  id="wd-available-until"
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>

        <hr />

        {/* cancel / save */}
        <Form.Group>
          <Row>
            <Col className="text-end">
              <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button variant="secondary" className="me-2">
                  Cancel
                </Button>
              </Link>
              <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button variant="danger">Save</Button>
              </Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}
