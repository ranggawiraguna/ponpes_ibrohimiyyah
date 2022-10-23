import LoginPage from 'containers/pages/GlobalPages/LoginPage';
import RegisterPage from 'containers/pages/GlobalPages/RegisterPage';
import { Route } from 'react-router';

const AuthenticationRoutes = [
  <Route key="Login Page" path="/masuk" element={<LoginPage />} />,
  <Route key="Register Page" path="/pendaftaran" element={<RegisterPage />} />
];

export default AuthenticationRoutes;
