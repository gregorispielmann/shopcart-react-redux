import { produce } from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  total: 0,
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        const { product } = action;
        const productIndex = draft.products.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
          if (product.quantity === 0) {
            draft.products.splice(productIndex, 1);
            toast.success(
              'Produto removido do carrinho com sucesso',
              'Sucesso'
            );
          } else {
            draft.products[productIndex].quantity = product.quantity;
            toast.info(
              'Quantidade atualizada no carrinho com sucesso!',
              'Info'
            );
          }
        } else if (product.quantity === 0) {
          toast.error(
            'Não é possível adicionar ao carrinho produtos com quantidade 0'
          );
        } else {
          draft.products.push(product);
          toast.success(
            'Produto adicionado ao carrinho com sucesso',
            'Sucesso'
          );
        }

        let price = 0;
        draft.products.map(p => {
          price += p.price * p.quantity;
        });
        draft.total = price;
      });
    case '@cart/NEW_SHOP':
      return INITIAL_STATE;
    default:
      return state;
  }
}
