import ArticlePage from 'containers/pages/SecretaryPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const SecretaryRoutes = [
  <Route key="/sekretaris" exact path="/sekretaris" replace element={<Navigate to="artikel" />} />,
  <Route key="/sekretaris/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/sekretaris/profile" path="profile" element={<UserProfile />} />
];

export default SecretaryRoutes;
