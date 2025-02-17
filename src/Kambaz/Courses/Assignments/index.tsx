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
import { useParams } from "react-router";
import * as db from "../../Database/Index";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
const formatDateForDisplay = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const formattedDate = date.toLocaleString('en-US', options);

  return formattedDate.replace(/^(\w+ \d+)(.*)$/, '$1 $2');
};

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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsJournals className="me-3 fs-4 text-success" />
                  <div className="flex-grow-1 me-3">
                    <a
                      href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                    >
                      {assignment.title}
                    </a>
                    <br />
                    {assignment.modules} | <b>Not available until</b>{" "}
                    {formatDateForDisplay(assignment.availableDate)} | <b>Due</b> {formatDateForDisplay(assignment.dueDate)}{" "}
                    | {assignment.points} pts
                  </div>
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
