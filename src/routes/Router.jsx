import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../dashboard/layouts/DashboardLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
//import PrivateRoute from "../private/PrivateRoute";

//import StudentDashboard from "../dashboard/student/StudentDashboard";
import TeacherDashboard from "../dashboard/teacher/TeacherDashboard";
//import AdminDashboard from "../dashboard/admin/AdminDashboard";
import AdminRoute from "../private/AdminRoute";
import AccessDenied from "../pages/AccessDenied";
import Students from "../dashboard/admin/Students";
import Teachers from "../dashboard/admin/Teachers";
import Batches from "../dashboard/admin/Batches";
import AdminCourses from "../dashboard/admin/Courses";
import Routines from "../dashboard/admin/Routines";
import StudentDetails from "../dashboard/admin/StudentDetails";
import Attendance from "../dashboard/admin/Attendance";
import AttendanceHistory from "../dashboard/admin/AttendanceHistory";
import Fees from "../dashboard/admin/Fees";
import AdminHome from "../dashboard/admin/AdminHome";
import StudentHome from "../dashboard/student/StudentHome";
import StudentRoute from "../private/StudentRoute";
import StudentLayout from "../dashboard/student/StudentLayout";
import StudentProfile from "../dashboard/student/StudentProfile"
import StudentAttendance from "../dashboard/student/StudentAttendance"
import StudentFees from "../dashboard/student/StudentFees"
import StudentRoutine from "../dashboard/student/StudentRoutine"
import AddRoutine from "../dashboard/admin/AddRoutine";
import MyCourses from "../dashboard/student/MyCourses";
import StudentPayments from "../dashboard/student/StudentPayments";
import EnrollCourse from "../pages/EnrollCourse";
import Payments from "../dashboard/admin/Payments";


import TeacherRoute from "../private/TeacherRoute";
import TeacherStudents from "../dashboard/teacher/TeacherStudents";
import TakeAttendance from "../dashboard/teacher/TakeAttendance";

import TeacherHome from "../dashboard/teacher/TeacherHome";
import CourseDetails from "../pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/course/:id",

        loader: async ({ params }) => {

          const res = await fetch(
            `https://probartan-server.onrender.com/courses/${params.id}`
          );

          return res.json();

        },

        element: <CourseDetails />,
      },
    ],
  },

  {
    path: "/student",
    element: (
      <StudentRoute>
        <StudentLayout />
      </StudentRoute>
    ),
    children: [
      {
        path: "",
        element: <StudentHome />,
      },
      {
        path: "profile",
        element: <StudentProfile />,
      },
      {
        path: "attendance",
        element: <StudentAttendance />,
      },
      {
        path: "fees",
        element: <StudentFees />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "payments",
        element: <StudentPayments />,
      },
      {
        path: "routine",
        element: <StudentRoutine />,
      },
    ],
    
  },

 {
  path: "/teacher",
  element: (
    <TeacherRoute>
      <TeacherHome />
    </TeacherRoute>
  ),
  children: [
    {
      path: "",
      element: <TeacherDashboard />,
    },
    {
      path: "students",
      element: <TeacherStudents />,
    },
    {
      path: "attendance",
      element: <TakeAttendance />,
    },
  ],
},

  {
    path: "/admin",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "batches",
        element: <Batches />,
      },
      {
        path: "courses",
        element: <AdminCourses/>,
      },
      {
        path: "routines",
        element: <Routines />,
      },
      {
        path: "students/:id",
        element: <StudentDetails />,
      },
      {
        path: "attendance",
        element: <Attendance />,
      },
      {
        path: "attendance-history",
        element: <AttendanceHistory />,
      },
      {
        path: "fees",
        element: <Fees />,
      },
      {
        path: "add-routine",
        element: <AddRoutine />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
    ],
  },
  {
  path: "/enroll/:id",

  loader: async ({ params }) => {

    const res = await fetch(
      `https://probartan-server.onrender.com/courses/${params.id}`
    );

    return res.json();
  },

  element: <EnrollCourse />,
},
  // {
  //   path: "/student",
  //   element: <StudentHome />,
  // },

  // {
  //   path: "/teacher",
  //   element: <TeacherHome />,
  // },
  {
    path: "/access-denied",
    element: <AccessDenied />,
  },
]);

export default router;