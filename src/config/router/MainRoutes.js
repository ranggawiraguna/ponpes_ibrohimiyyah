import { Route } from "react-router-dom";
import ErrorPage from "containers/pages/ErrorPage";
import LandingPage from "containers/pages/LandingPage";
import LoginPage from "containers/pages/LoginPage";
import MainLayout from "containers/layouts/MainLayout";
import RegisterPage from "containers/pages/RegisterPage";
import AccountManager from "utils/other/AccountManager";
import ValidateSession from "utils/other/ValidateSession";
import SantriRoutes from "./SantriRoutes";
import SecretaryRoutes from "./SecretaryRoutes";
import TeacherRoutes from "./TeacherRoutes";

const MainRoutes = [
  <Route key="Landing Page" path="/" element={<LandingPage />} />,
  <Route key="Login Page" path="/masuk" element={<LoginPage />} />,
  <Route key="Register Page" path="/pendaftaran" element={<RegisterPage />} />,
  <Route key="Content Routes" element={<AccountManager />}>
    <Route key="Main Layout" element={<MainLayout />}>
      <Route
        key="Teacher"
        path="guru"
        element={<ValidateSession role="guru" />}
        children={TeacherRoutes}
      />
      <Route
        key="Secrectary"
        path="sekertaris"
        element={<ValidateSession role="sekertaris" />}
        children={SecretaryRoutes}
      />
      <Route
        key="Santri"
        path="santri"
        element={<ValidateSession role="santri" />}
        children={SantriRoutes}
      />
    </Route>
  </Route>,
  <Route key="Not Found" path="*" element={<ErrorPage />} />,
];

export default MainRoutes;
