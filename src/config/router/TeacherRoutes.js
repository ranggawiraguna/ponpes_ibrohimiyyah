import ArticlePage from 'containers/pages/TeacherPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const TeacherRoutes = [
  <Route key="/guru" exact path="/guru" replace element={<Navigate to="artikel" />} />,
  <Route key="/guru/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/guru/profile" path="profile" element={<UserProfile />} />
];

export default TeacherRoutes;
