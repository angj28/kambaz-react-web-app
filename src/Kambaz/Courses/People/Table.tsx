import { Button, Table, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import ProtectedFaculty from "../../ProtectedFaculty";
import PeopleDetails from "./details";
import { Link } from "react-router";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const [userId, setUserId] = useState<string>("");
  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <ProtectedFaculty studentAccess={<></>}>
        <div className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="me-2"
          />
          <Button variant="primary">
            {/* onClick={handleAddUser} */}
            Add User
          </Button>
        </div>
      </ProtectedFaculty>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kambaz/Account/Users/${user._id}`}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
