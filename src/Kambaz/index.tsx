import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  addEnrollment,
  deleteCourse,
  updateCourse,
} from "./Courses/reducer";

export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/cat1.jpg",
    description: "New Description",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    dispatch(addCourse(newCourse));

    const newEnrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: newCourse._id,
    };
    dispatch(addEnrollment(newEnrollment));

    setCourse({
      _id: uuidv4(),
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/cat1.jpg",
      description: "New Description",
    });
  };
  const deleteThisCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };
  const updateThisCourse = () => {
    dispatch(updateCourse(course));
  };
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteThisCourse}
                  updateCourse={updateThisCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
