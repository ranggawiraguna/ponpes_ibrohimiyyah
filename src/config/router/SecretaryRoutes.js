import HomePage from 'containers/pages/SantriPages/HomePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const SecretaryRoutes = [
  <Route key="/sekertaris" exact path="/sekertaris" replace element={<Navigate to="home" />} />,
  <Route key="/sekertaris/home" path="home" element={<HomePage />} />,
  <Route key="/sekertaris/profile" path="profile" element={<UserProfile />} />
];

export default SecretaryRoutes;
