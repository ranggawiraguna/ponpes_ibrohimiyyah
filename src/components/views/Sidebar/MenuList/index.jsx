import { Typography } from '@mui/material';
import NavGroup from './NavGroup';
import sekretarisSidebar from 'config/menu/SekertarisSidebar';
import guruSidebar from 'config/menu/GuruSidebar';
import santriSidebar from 'config/menu/SantriSidebar';
import { useLocation } from 'react-router';

export default function MenuList(props) {
  const location = useLocation();

  const getMenu = () => {
    if (location.pathname.includes('guru')) {
      return guruSidebar;
    } else if (location.pathname.includes('sekretaris')) {
      return sekretarisSidebar;
    } else if (location.pathname.includes('santri')) {
      return santriSidebar;
    } else {
      return {
        items: []
      };
    }
  };

  const navItems = getMenu().items.map((item, index) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} isLastIndex={index === getMenu().items.length - 1} item={item} />;

      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center" sx={{ fontFamily: 'Folks' }}>
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
}
