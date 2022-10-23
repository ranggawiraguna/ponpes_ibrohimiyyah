import Component from './styled';
import LogoIcon from 'assets/image//logo-icon.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BoxTransition } from '../MotionTransitions';

export default function ToolbarFrame(props) {
  return (
    <Component>
      <Link to="/" className="pointer flexNullCenter">
        <img src={LogoIcon} alt="" width={60} style={{ marginBottom: 5 }} />
        <h1 style={{ marginLeft: '15px', lineHeight: 1.1 }} className="font20 bold">
          Pondok Pesantren
          <br />
          Al-Qur'an Ibrohimiyyah
        </h1>
      </Link>
      <Link to={props.buttonLink}>
        <BoxTransition variant="fadeZoom" duration={0.5}>
          <Button variant="contained">{props.buttonText}</Button>
        </BoxTransition>
      </Link>
    </Component>
  );
}
