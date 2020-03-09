import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from '~/components/Product';

// import { Container } from './styles';

import data from '~/data';

export default function ProductList() {
  return (
    <Grid container>
      {data.map(p => (
        <Product
          key={p.id}
          id={p.id}
          title={p.name}
          image={p.image}
          price={p.price}
        />
      ))}
    </Grid>
  );
}
