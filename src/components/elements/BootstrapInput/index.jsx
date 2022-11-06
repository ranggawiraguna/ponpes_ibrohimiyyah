import { FormControl, InputLabel } from '@mui/material';
import Component from './styled';

export default function BootstrapInput(props) {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={props.id} sx={{ fontSize: 16, fontFamily: 'Folks' }}>
        {props.label}
      </InputLabel>
      <Component defaultValue={props.defaultValue} id={props.id} onChange={props.onChange} />
    </FormControl>
  );
}
