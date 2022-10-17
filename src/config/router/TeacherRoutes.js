import HomePage from "containers/pages/SantriPages/HomePage";
import { Navigate, Route } from "react-router";

const TeacherRoutes = [
  <Route key="/guru" exact path="/guru" replace element={<Navigate to="home" />} />,
  <Route key="/guru/home" path="home" element={<HomePage />} />,
];

export default TeacherRoutes;
