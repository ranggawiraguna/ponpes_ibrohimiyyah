import LoginPage from 'containers/pages/GlobalPages/LoginPage';
import RegisterPage from 'containers/pages/GlobalPages/RegisterPage';
import { Route } from 'react-router';
import AccountManager from 'utils/other/AccountManager';

const AuthenticationRoutes = [
  <Route key="Account Manager" element={<AccountManager />}>
    <Route key="Login Page" path="/masuk" element={<LoginPage />} />
  </Route>,
  <Route key="Register Page" path="/pendaftaran" element={<RegisterPage />} />
];

export default AuthenticationRoutes;
