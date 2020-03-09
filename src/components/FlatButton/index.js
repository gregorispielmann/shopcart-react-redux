import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FlatButton({
  title,
  colorbg,
  disabled,
  type,
  onClick,
}) {
  return (
    <Container
      colorbg={colorbg}
      variant="contained"
      size="large"
      fullWidth
      disableElevation
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {title}
    </Container>
  );
}

FlatButton.propTypes = {
  title: PropTypes.string.isRequired,
  colorbg: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

FlatButton.defaultProps = {
  disabled: false,
  type: null,
  onClick: null,
};
