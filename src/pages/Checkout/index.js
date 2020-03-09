import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getFormValues, reset } from 'redux-form';
import { Redirect } from 'react-router-dom';
import history from '~/services/history';

import { newShop } from '~/store/modules/cart/actions';

import { formatPrice } from '~/util/format';
import FlatButton from '~/components/FlatButton';
import {
  Background,
  ContainerCheckout,
  Icon,
  Name,
  Total,
  Description,
} from './styles';

function Checkout() {
  const dispatch = useDispatch();
  const userData = useSelector(state => getFormValues('customer')(state));
  const total = useSelector(state => state.cart.total);

  function handleClick() {
    history.push('/');
    dispatch(reset('customer'));
    dispatch(newShop());
  }

  return (
    <Background>
      <ContainerCheckout>
        {userData ? (
          <>
            <Name>{userData.name},</Name>
            <Description>
              Sua compra no valor de <Total>{formatPrice(total)}</Total> foi
              finalizada com sucesso
            </Description>
            <Icon src={require('~/assets/images/purchase.png')} alt="puchase" />
            <FlatButton
              colorbg="#FF9820"
              title="Iniciar nova compra"
              onClick={handleClick}
            />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </ContainerCheckout>
    </Background>
  );
}

export default connect()(Checkout);
