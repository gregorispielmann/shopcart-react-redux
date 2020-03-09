import styled from 'styled-components';

export const Container = styled.div``;

export const Loading = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);

  display: ${props => (props.isLoading ? 'block' : 'none')};
`;
