import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField';

export default function InputField({
  name,
  label,
  placeholder,
  variant,
  fullWidth,
  touched,
  error,
}) {
  const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
  return (
    <Field
      name={name}
      component={renderTextField}
      label={label}
      placeholder={placeholder}
      variant={variant}
      required
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth={fullWidth}
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  invalid: PropTypes.bool,
};

InputField.defaultProps = {
  fullWidth: true,
  touched: false,
  error: false,
  invalid: false,
};
