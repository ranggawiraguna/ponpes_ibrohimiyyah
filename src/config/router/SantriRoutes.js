import HomePage from 'containers/pages/SantriPages/HomePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const SantriRoutes = [
  <Route key="/santri" exact path="/santri" replace element={<Navigate to="home" />} />,
  <Route key="/santri/home" path="home" element={<HomePage />} />,
  <Route key="/santri/profile" path="profile" element={<UserProfile />} />
];

export default SantriRoutes;
