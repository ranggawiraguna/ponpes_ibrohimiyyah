/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from 'react-router-dom';
import { CLEAR_SESSION } from 'utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import { restoreSession } from 'utils/redux/reducers/account';

export default function AccountManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountReducer = useSelector((state) => state.accountReducer);

  onAuthStateChanged(auth, (user) => {
    if (user && accountReducer.id === '') {
      dispatch(restoreSession({ data: user.uid, navigate: navigate }));
    } else if (!user && accountReducer.isLogin == null) {
      dispatch({ type: CLEAR_SESSION });
      navigate('/masuk');
    }
  });

  return <Outlet />;
}
