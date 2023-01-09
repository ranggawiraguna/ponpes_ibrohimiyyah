import ArticlePage from 'containers/pages/TeacherPages/ArticlePage';
import MateriPage from 'containers/pages/TeacherPages/MateriPage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';
import PenilaianPage from 'containers/pages/TeacherPages/PenilaianPage';
import HafalanPage from 'containers/pages/TeacherPages/HafalanPage';
import AbsensiPage from 'containers/pages/TeacherPages/AbsensiPage';

const TeacherRoutes = [
  <Route key="/guru" exact path="/guru" replace element={<Navigate to="artikel" />} />,
  <Route key="/guru/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/guru/materi-1" path="materi-1" element={<MateriPage classNumber={1} />} />,
  <Route key="/guru/materi-2" path="materi-2" element={<MateriPage classNumber={2} />} />,
  <Route key="/guru/materi-3" path="materi-3" element={<MateriPage classNumber={3} />} />,
  <Route key="/guru/penilaian" path="penilaian" element={<PenilaianPage />} />,
  <Route key="/guru/hafalan" path="hafalan" element={<HafalanPage />} />,
  <Route key="/guru/absensi" path="absensi" element={<AbsensiPage />} />,
  <Route key="/guru/profile" path="profile" element={<UserProfile section="Guru" />} />
];

export default TeacherRoutes;
