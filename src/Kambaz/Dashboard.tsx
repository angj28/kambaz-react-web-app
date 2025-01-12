import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat1.jpg" width={200} height={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1235/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat2.jpg" width={200} height={200} />
            <div>
              <h5> CS1235 Mobile App Development </h5>
              <p className="wd-dashboard-course-title">
                Mobile app development for iOS
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1236/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat3.jpg" width={200} height={200} />
            <div>
              <h5> MATH1236 Linear Algebra </h5>
              <p className="wd-dashboard-course-title">
                Matrices and their applications
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1237/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat4.jpg" width={200} height={200} />
            <div>
              <h5> CS1237 OOD </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1238/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat5.jpg" width={200} height={200} />
            <div>
              <h5> DS1238 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1239/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat6.jpg" width={200} height={200} />
            <div>
              <h5> CY1239 Cybersecurity </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Cybersecurity
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1240/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cat7.jpg" width={200} height={200} />
            <div>
              <h5> PSYC1240 Psychology of Language</h5>
              <p className="wd-dashboard-course-title">
                The study of language and its origins
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
