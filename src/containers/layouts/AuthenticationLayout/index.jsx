import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Component from './styled';

export default function AuthenticationLayout() {
  return (
    <Component>
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </Component>
  );
}
