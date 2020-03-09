import React, { useState, useRef, useEffect } from 'react';
import { Field } from 'redux-form';

import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

// import { Container } from './styles';

export default function SelectField({ label, name, children }) {
  const inputLabel = useRef('');
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const renderFromHelper = ({ touched, error }) => {
    if (!touched && error) {
      return false;
    }
    return <FormHelperText>{touched && error}</FormHelperText>;
  };

  const renderSelectField = ({
    input,
    meta: { touched, error },
    ...custom
  }) => (
    <FormControl variant="outlined" error={touched && error} fullWidth>
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        required
        inputProps={{
          name,
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );

  return (
    <Field name={name} component={renderSelectField} labelWidth={labelWidth} />
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  input: PropTypes.element,
  meta: PropTypes.objectOf(Boolean),
};

SelectField.defaultProps = {
  touched: false,
  error: false,
  input: null,
  meta: null,
};
