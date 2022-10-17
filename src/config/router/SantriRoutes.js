import HomePage from "containers/pages/SantriPages/HomePage";
import { Navigate, Route } from "react-router";

const SantriRoutes = [
  <Route key="/santri" exact path="/santri" replace element={<Navigate to="home" />} />,
  <Route key="/santri/home" path="home" element={<HomePage />} />,
];

export default SantriRoutes;
