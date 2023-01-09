import ArticlePage from 'containers/pages/SantriPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import ClassPage from 'containers/pages/SantriPages/ClassPage';
import NilaiPage from 'containers/pages/SantriPages/NilaiPage';
import HafalanPage from 'containers/pages/SantriPages/HafalanPage';
import PembayaranPage from 'containers/pages/SantriPages/PembayaranPage';
import { Navigate, Route } from 'react-router';
import ArticleDetailPage from 'containers/pages/GlobalPages/ArticleDetail';

const SantriRoutes = [
  <Route key="/santri" exact path="/santri" replace element={<Navigate to="artikel" />} />,
  <Route key="/santri/artikel" exact path="artikel" element={<ArticlePage />} />,
  <Route key="/santri/artikel/id" exact path="artikel/:id" element={<ArticleDetailPage sectionContent />} />,
  <Route key="/santri/kelas" path="kelas" element={<ClassPage />} />,
  <Route key="/santri/nilai" path="nilai" element={<NilaiPage />} />,
  <Route key="/santri/hafalan" path="hafalan" element={<HafalanPage />} />,
  <Route key="/santri/pembayaran" path="pembayaran" element={<PembayaranPage />} />,
  <Route key="/santri/profile" path="profile" element={<UserProfile section={'Santri'} />} />
];

export default SantriRoutes;
