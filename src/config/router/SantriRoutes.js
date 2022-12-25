import ArticlePage from 'containers/pages/SantriPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import ClassPage from 'containers/pages/SantriPages/ClassPage';
import NilaiPage from 'containers/pages/SantriPages/NilaiPage';
import HafalanPage from 'containers/pages/SantriPages/HafalanPage';
import PembayaranPage from 'containers/pages/SantriPages/PembayaranPage';
import { Navigate, Route } from 'react-router';

const SantriRoutes = [
  <Route key="/santri" exact path="/santri" replace element={<Navigate to="artikel" />} />,
  <Route key="/santri/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/santri/artikel" path="kelas" element={<ClassPage />} />,
  <Route key="/santri/artikel" path="nilai" element={<NilaiPage />} />,
  <Route key="/santri/artikel" path="hafalan" element={<HafalanPage />} />,
  <Route key="/santri/artikel" path="pembayaran" element={<PembayaranPage />} />,
  <Route key="/santri/profile" path="profile" element={<UserProfile section={'Santri'} />} />
];

export default SantriRoutes;
