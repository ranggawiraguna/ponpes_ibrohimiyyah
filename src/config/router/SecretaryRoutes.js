import HomePage from "containers/pages/SantriPages/HomePage";
import { Navigate, Route } from "react-router";

const SecretaryRoutes = [
  <Route key="/sekertaris" exact path="/sekertaris" replace element={<Navigate to="home" />} />,
  <Route key="/sekertaris/home" path="home" element={<HomePage />} />,
];

export default SecretaryRoutes;
