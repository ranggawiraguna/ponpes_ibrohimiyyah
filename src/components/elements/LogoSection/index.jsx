import LogoIcon from 'assets/img/logo-icon-text.png';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

export default function LogoSection() {
  return (
    <ButtonBase disableRipple component={Link} to={'/'}>
      <img src={LogoIcon} alt="LFashion" width="160" />
    </ButtonBase>
  );
}
