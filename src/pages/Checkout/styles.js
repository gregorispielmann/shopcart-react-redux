import styled from 'styled-components';
import Container from '@material-ui/core/Container';

export const Background = styled.div`
  background: #eceff1;
  height: 100vh;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCheckout = styled(Container)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  && {
    max-width: 360px;
    padding: 60px 40px;
  }
`;

export const Icon = styled.img`
  width: 158px;
  margin: 40px 0;
`;

export const Total = styled.span`
  color: #019cdf;
  font-size: 18px;
  font-weight: bold;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #546e7a;
`;

export const Description = styled.p`
  text-align: center;

  font-size: 18px;
  font-weight: bold;
  color: #546e7a;
`;
