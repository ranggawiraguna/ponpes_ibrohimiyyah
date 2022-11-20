import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import Dokumentasi from 'components/views/LandingContent/Sections/Dokumentasi';

export default function DocumentationPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'documentation') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'documentation' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Dokumentasi />
    </div>
  );
}
