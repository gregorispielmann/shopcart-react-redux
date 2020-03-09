import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Header from '~/components/Header';
import FormClient from '~/components/FormClient';
import ProductList from '~/components/ProductList';

import { Loading } from './styles';

export default function Shop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      <Loading isLoading={loading} />
      <Container maxWidth="lg">
        <Header title="Produtos" />
        <ProductList />
        <Header title="Dados do Cliente" />
        <FormClient />
      </Container>
    </>
  );
}
