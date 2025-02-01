import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat1.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    {" "}
                    CS1234 <br /> React JS{" "}
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat2.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    {" "}
                    CS1235 <br />
                    Mobile App Development{" "}
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Mobile app development for iOS
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat3.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    {" "}
                    MATH1236 <br />
                    Linear Algebra{" "}
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Matrices and their applications
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat4.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    {" "}
                    CS1237 <br />
                    OOD{" "}
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Object-Oriented Design
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat5.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    DS1238 <br /> Data Science
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Foundations of Data Science
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat6.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    CY1239 <br />
                    Cybersecurity
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Fundamentals of Cybersecurity
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/cat7.jpg"
                  width={200}
                  height={200}
                />
                <CardBody>
                  <CardTitle>
                    PSYC1240 <br /> Psychology of Language
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    The study of people and language
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
