import { Route } from 'react-router-dom';
import ErrorPage from 'containers/pages/GlobalPages/ErrorPage';
import LandingPage from 'containers/pages/GlobalPages/LandingPage';
import MainLayout from 'containers/layouts/MainLayout';
import AccountManager from 'utils/other/AccountManager';
import ValidateSession from 'utils/other/ValidateSession';
import SantriRoutes from './SantriRoutes';
import SecretaryRoutes from './SecretaryRoutes';
import TeacherRoutes from './TeacherRoutes';
import AuthenticationLayout from 'containers/layouts/AuthenticationLayout';
import AuthenticationRoutes from './AuthenticationRoutes';
import ArticleDetailPage from 'containers/pages/GlobalPages/ArticleDetail';

const MainRoutes = [
  <Route key="Authentication Routes" element={<AuthenticationLayout />} children={AuthenticationRoutes} />,
  <Route key="Account Manager" element={<AccountManager />}>
    <Route key="Main Layout" element={<MainLayout />}>
      <Route key="Teacher" path="guru" element={<ValidateSession role="guru" />} children={TeacherRoutes} />
      <Route key="Secrectary" path="sekretaris" element={<ValidateSession role="sekretaris" />} children={SecretaryRoutes} />
      <Route key="Santri" path="santri" element={<ValidateSession role="santri" />} children={SantriRoutes} />
    </Route>
  </Route>,
  <Route key="Landing Page" exact path="/" element={<LandingPage />}>
    <Route key="Article" exact path="article" />
    <Route key="Article Id" exact path="article/:id" element={<ArticleDetailPage />} />
  </Route>,
  <Route key="Not Found" path="*" element={<ErrorPage />} />
];

export default MainRoutes;
