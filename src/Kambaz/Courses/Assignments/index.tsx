import { Button, ListGroup } from "react-bootstrap";
import {
  BsGripVertical,
  BsCaretDownFill,
  BsPlus,
  BsJournals,
} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /> <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <BsCaretDownFill /> Assignments
            <div className="float-end">
              <Button variant="outline-secondary">40% of Total</Button>
              <BsPlus className="fs-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsJournals className="me-3 fs-4 text-success" />
              <div className="flex-grow-1 me-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A1 - ENV + HTML
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
                <b>Due</b> May 13 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsJournals className="me-3 fs-4 text-success" />
              <div className="flex-grow-1 me-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 13 at 12:00am
                | <b>Due</b> May 20 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsJournals className="me-3 fs-4 text-success" />
              <div className="flex-grow-1 me-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                >
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                Multiple Modules | <b>Not available until</b> May 20 at 12:00am
                | <b>Due</b> May 27 at 11:59 pm | 100 pts
              </div>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
      {/* <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
          <b>Due</b> May 13 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |{" "}
          <b>Due</b> May 20 at 11:59 pm | 100 pts
        </li>
        <li className="we-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |{" "}
          <b>Due</b> May 27 at 11:59 pm | 100 pts
        </li>
      </ul> */}
    </div>
  );
}
