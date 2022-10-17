import { useDispatch, useSelector } from "react-redux";
import { MENU_OPEN } from "utils/redux/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'home') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'home' });
    }
    
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <></>
    </div>
  );
}
