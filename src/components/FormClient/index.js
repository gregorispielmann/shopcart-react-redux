import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { reduxForm } from 'redux-form';
import { formatPrice } from '~/util/format';
import { checkout } from '~/store/modules/cart/actions';
import history from '~/services/history';

import SelectField from '~/components/SelectField';
import InputField from '~/components/InputField';
import FlatButton from '~/components/FlatButton';

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'sex'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Obrigatório';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Endereço de e-mail inválido';
  }
  return errors;
};

function FormClient({ submitting }) {
  const cart = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (cart === 0) {
      toast.error('Você não pode finalizar uma compra sem itens no carrinho');
      return;
    }
    dispatch(checkout());
    history.push('/checkout');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={5}>
          <InputField
            name="name"
            label="Nome"
            placeholder="Nome do cliente aqui"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <InputField
            name="email"
            label="Email"
            placeholder="Digite seu email aqui"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <SelectField label="Sexo" name="sex" variant="outlined">
            <option value="" />
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </SelectField>
        </Grid>
      </Grid>
      <Box my={5}>
        <Grid container justify="flex-end">
          <Grid item xs={12} sm={4} lg={3} align="flex-end">
            <Box
              color="#546E7A"
              style={{
                fontSize: '26px',
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              {`Total
              ${formatPrice(cart)}`}
            </Box>
            <FlatButton
              colorbg="#FF9820"
              title="Finalizar compra"
              type="submit"
              disabled={submitting}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: 'customer',
  validate,
  destroyOnUnmount: false,
})(FormClient);

FormClient.propTypes = {
  submitting: PropTypes.bool,
};

FormClient.defaultProps = {
  submitting: false,
};
