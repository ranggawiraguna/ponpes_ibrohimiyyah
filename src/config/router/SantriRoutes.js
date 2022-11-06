import ArticlePage from 'containers/pages/SantriPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const SantriRoutes = [
  <Route key="/santri" exact path="/santri" replace element={<Navigate to="artikel" />} />,
  <Route key="/santri/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/santri/profile" path="profile" element={<UserProfile />} />
];

export default SantriRoutes;
