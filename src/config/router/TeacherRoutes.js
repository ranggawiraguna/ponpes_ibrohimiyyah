import ArticlePage from 'containers/pages/TeacherPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';

const TeacherRoutes = [
  <Route key="/guru" exact path="/guru" replace element={<Navigate to="artikel" />} />,
  <Route key="/guru/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/guru/materi" path="materi" element={<ArticlePage />} />,
  <Route key="/guru/penilaian" path="penilaian" element={<ArticlePage />} />,
  <Route key="/guru/hafalan" path="hafalan" element={<ArticlePage />} />,
  <Route key="/guru/absensi" path="absensi" element={<ArticlePage />} />,
  <Route key="/guru/profile" path="profile" element={<UserProfile section={'Guru'} />} />
];

export default TeacherRoutes;
