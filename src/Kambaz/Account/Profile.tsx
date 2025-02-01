import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form>
        <Form.Group controlId="wd-username" className="mb-2">
          <Form.Control
            defaultValue="alice"
            placeholder="Username"
            className="wd-username"
          />
        </Form.Group>

        <Form.Group controlId="wd-password" className="mb-2">
          <Form.Control
            defaultValue="123"
            type="password"
            placeholder="Password"
            className="wd-password"
          />
        </Form.Group>

        <Form.Group controlId="wd-firstname" className="mb-2">
          <Form.Control
            defaultValue="Alice"
            placeholder="First Name"
            id="wd-firstname"
          />
        </Form.Group>

        <Form.Group controlId="wd-lastname" className="mb-2">
          <Form.Control
            defaultValue="Wonderland"
            placeholder="Last Name"
            id="wd-lastname"
          />
        </Form.Group>

        <Form.Group controlId="wd-dob" className="mb-2">
          <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" />
        </Form.Group>

        <Form.Group controlId="wd-email" className="mb-2">
          <Form.Control
            defaultValue="alice@wonderland"
            type="email"
            id="wd-email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group controlId="wd-role" className="mb-2">
          <Form.Control as="select" defaultValue="FACULTY">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
        </Form.Group>

        <Link
          id="wd-signout-btn"
          to="/Kambaz/Account/Signin"
          className="btn btn-danger w-100 mb-2"
        >
          Sign out
        </Link>
      </Form>
    </div>
  );
}
