import ArticlePage from 'containers/pages/SecretaryPages/ArticlePage';
import UserProfile from 'containers/pages/GlobalPages/UserProfile';
import { Navigate, Route } from 'react-router';
import ProfilPondokPage from 'containers/pages/SecretaryPages/ProfilePondokPage';
import DocumentationPage from 'containers/pages/SecretaryPages/DocumentationPage';
import RegistrationPage from 'containers/pages/SecretaryPages/RegistrationPage';
import PaymentPage from 'containers/pages/SecretaryPages/PaymentPage';
import PaymentPageHistory from 'containers/pages/SecretaryPages/PaymentPageHistory';

const SecretaryRoutes = [
  <Route key="/sekretaris" exact path="/sekretaris" replace element={<Navigate to="artikel" />} />,
  <Route key="/sekretaris/artikel" path="artikel" element={<ArticlePage />} />,
  <Route key="/sekretaris/profile-pondok" path="profile-pondok" element={<ProfilPondokPage />} />,
  <Route key="/sekretaris/profile" path="profile" element={<UserProfile section={'Sekretaris'} />} />,
  <Route key="/sekretaris/dokumentasi" path="dokumentasi" element={<DocumentationPage />} />,
  <Route key="/sekretaris/pendaftaran" path="pendaftaran" element={<RegistrationPage />} />,
  <Route key="/sekretaris/pembayaran" path="pembayaran" element={<PaymentPage />} />,
  <Route key="/sekretaris/pembayaran-history" path="riwayat-pembayaran" element={<PaymentPageHistory />} />
];

export default SecretaryRoutes;
