import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { darken } from 'polished';

export const Container = styled(Button)`
  && {
    background: ${props => props.colorbg};
    margin: 15px 0;
    font-weight: bold;
    color: white;
  }

  &&:hover {
    background: ${props => darken(0.1, props.colorbg)};
  }
`;
