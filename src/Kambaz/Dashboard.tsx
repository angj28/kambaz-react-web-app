import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedFaculty from "./ProtectedFaculty";
import { useState } from "react";
import ProtectedStudent from "./ProtectedStudent";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.coursesReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrollUser = (courseId: string) => {
    const newEnrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: courseId,
    };
    dispatch(addEnrollment(newEnrollment));
  };
  const unenrollUser = (enrollmentId: string) => {
    dispatch(deleteEnrollment(enrollmentId));
  };
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center w-100">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <ProtectedStudent facultyAccess={<></>}>
          <button
            className="btn btn-primary float-end"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {" "}
            Enrollments
          </button>
        </ProtectedStudent>
      </div>
      <hr />
      <ProtectedFaculty studentAccess={<></>}>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <FormControl
          value={course.name}
          className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <FormControl
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedFaculty>
      <h2 id="wd-dashboard-published">
        Published Courses (
        {
          (showAllCourses
            ? courses
            : courses.filter((course) =>
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              )
          ).length
        }
        )
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showAllCourses
            ? courses
            : courses.filter((course) =>
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              )
          ).map((course, index) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img
                  src={`/images/cat${(index % 8) + 1}.jpg`}
                  variant="top"
                  width="100%"
                  height={160}
                />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}{" "}
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}{" "}
                  </Card.Text>
                  <ProtectedFaculty studentAccess={<></>}>
                    <Button
                      onClick={() =>
                        navigate(`/Kambaz/Courses/${course._id}/Home`)
                      }
                      variant="primary"
                    >
                      {" "}
                      Go{" "}
                    </Button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                    <button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </ProtectedFaculty>
                  <ProtectedStudent facultyAccess={<></>}>
                    {enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    ) ? (
                      <div>
                        <Button
                          onClick={() =>
                            navigate(`/Kambaz/Courses/${course._id}/Home`)
                          }
                          variant="primary"
                        >
                          {" "}
                          Go{" "}
                        </Button>
                        <button
                          onClick={() => {
                            const enrollmentId = enrollments.find(
                              (enrollment: any) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                            )?._id;

                            if (enrollmentId) {
                              unenrollUser(enrollmentId);
                            }
                          }}
                          className="btn btn-danger float-end"
                        >
                          Unenroll
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          enrollUser(course._id);
                        }}
                        className="btn btn-success float-end"
                      >
                        Enroll
                      </button>
                    )}
                  </ProtectedStudent>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
