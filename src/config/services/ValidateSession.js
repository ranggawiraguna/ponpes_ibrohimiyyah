/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
// import { useNavigate, Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

export default function ValidateSession(props) {
  // let navigate = useNavigate();

  // const roleDisallow = props.role === 'store' ? 'inventory' : 'store';
  // const accountReducer = useSelector((state) => state.accountReducer);

  // const [Page, setPage] = useState(<></>);
  // const [sessionChecked, setSessionChecked] = useState(false);

  // useEffect(() => {
  //   if (accountReducer.isLogin !== null && !sessionChecked) {
  //     if (accountReducer.isLogin === false) {
  //       navigate('/admin-login');
  //     } else {
  //       if (accountReducer.role === roleDisallow) {
  //         navigate('/error');
  //       } else if (accountReducer.role === props.role || accountReducer.role === 'owner') {
  //         setSessionChecked(true);
  //         setPage(<Outlet />);
  //       }
  //     }
  //   }
  // });

  // return Page;
  return <Outlet />;
}
