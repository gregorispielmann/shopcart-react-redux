import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '~/components/Header';
import FormClient from '~/components/FormClient';
import ProductList from '~/components/ProductList';

export default function Shop() {
  return (
    <Container maxWidth="lg">
      <Header title="Produtos" />
      <ProductList />
      <Header title="Dados do Cliente" />
      <FormClient />
    </Container>
  );
}
