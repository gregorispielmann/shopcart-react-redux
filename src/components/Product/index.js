import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { Add, Remove } from '@material-ui/icons';

import { useDispatch, useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';

import FlatButton from '~/components/FlatButton';
import { addToCart } from '~/store/modules/cart/actions';
import { formatPrice } from '~/util/format';

import {
  Container,
  ImageBox,
  Title,
  Description,
  Price,
  CartAdd,
  AddProduct,
  QtInput,
  ChangeButton,
} from './styles';

function Product({ id, title, price, image }) {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const product = useSelector(state => {
    if (state.cart.products.length > 0)
      return state.cart.products.filter(p => p.id === id);
  });

  /** FORMAT PRICES */
  const priceFormat = formatPrice(price);
  const priceMonthly = formatPrice(price / 12);
  const priceDiscount = formatPrice(price * 0.9);
  /** END FORMAT */

  /** HANDLERS */
  function handleSelected() {
    setSelected(!selected);
  }

  function handleQuantity(q) {
    const numbers = '^[0-9]*$';
    if (q <= 0) setQuantity(0);
    if (!String(q).match(numbers)) return;
    setQuantity(q);
  }

  function handleAddToCart() {
    dispatch(addToCart(id, quantity, price));
  }
  /** END HANDLERS */

  return (
    <Container
      item
      xs={12}
      sm={6}
      md={3}
      lg={3}
      onMouseEnter={handleSelected}
      onMouseLeave={handleSelected}
      align="center"
    >
      <ImageBox src={require(`../../assets/images/${image}`)} />
      <CartAdd selected={selected}>
        <Title>{title}</Title>
        <Price>{priceFormat}</Price>
        <Description>Em ate 12x de {priceMonthly}</Description>
        <Description>{priceDiscount} à vista (10% de desconto)</Description>

        <AddProduct display="flex" flexDirection="column" selected={selected}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <ChangeButton
              onClick={() => handleQuantity(parseFloat(quantity) - 1)}
            >
              <Remove />
            </ChangeButton>
            <QtInput
              color="secondary"
              size="small"
              variant="outlined"
              value={quantity}
              fullWidth
              onChange={e => handleQuantity(e.target.value)}
            />
            <ChangeButton
              onClick={() => handleQuantity(parseFloat(quantity) + 1)}
            >
              <Add />
            </ChangeButton>
          </Box>
          <FlatButton
            colorbg="#019CDF"
            title={product && product.length > 0 ? 'atualizar' : 'adicionar'}
            onClick={handleAddToCart}
          />
        </AddProduct>
      </CartAdd>
    </Container>
  );
}

export default connect()(Product);

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
