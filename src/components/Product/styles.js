import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled(Grid)`
  height: 420px;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;

  :hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.05);
  }
`;

export const CartAdd = styled(Box)`
  position: relative;
  z-index: 5;
  bottom: ${props => (props.selected ? 130 : 0)}px;
  background: rgba(255, 255, 255, 0.7);

  transition: 500ms ease-in-out;
  text-align: left;
`;

export const Title = styled.h1`
  padding-top: 10px;
  color: #546e7a;
  font-size: 14px;
  font-weight: normal;
`;

export const Price = styled.h1`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: #546e7a;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-weight: regular;
  font-size: 12px;
  color: #90a4ae;
`;

export const AddProduct = styled(Box)`
  margin-top: 20px;
  opacity: ${props => (props.selected ? 1 : 0)};
  transition: 500ms ease-in-out;
  transition-delay: 100ms;
`;

export const ImageBox = styled.img`
  margin: 10px 0;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: 0;
`;

export const QtInput = styled(TextField)`
  && {
    margin: 0 10px;
    text-align: center;
  }
`;

export const ChangeButton = styled(IconButton)`
  && {
    background: #cfd8dc;
    padding: 8px;
  }

  &&:hover {
    background: #b0bec5;
  }
`;
