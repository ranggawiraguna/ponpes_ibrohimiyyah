import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import Home from 'components/views/LandingContent/Sections/Home';
import { useLocation } from 'react-router';

export default function ArticlePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'article') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'article' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Home paddingTop={4} fromPath={location.pathname} />
    </div>
  );
}
