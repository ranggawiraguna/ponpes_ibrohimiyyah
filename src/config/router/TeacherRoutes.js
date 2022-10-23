import HomePage from 'containers/pages/SantriPages/HomePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const TeacherRoutes = [
  <Route key="/guru" exact path="/guru" replace element={<Navigate to="home" />} />,
  <Route key="/guru/home" path="home" element={<HomePage />} />,
  <Route key="/guru/profile" path="profile" element={<UserProfile />} />
];

export default TeacherRoutes;
