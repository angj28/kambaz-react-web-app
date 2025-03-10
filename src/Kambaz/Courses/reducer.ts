import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database/Index";
import { enrollments } from "../Database/Index";
const initialState = {
  courses: courses,
  enrollments: enrollments,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      state.courses = [...state.courses, course] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId
      );
    },
  },
});
export const {
  addCourse,
  deleteCourse,
  updateCourse,
  addEnrollment,
  deleteEnrollment,
} = coursesSlice.actions;
export default coursesSlice.reducer;
