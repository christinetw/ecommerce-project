import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../Data';
import Product from './Product'

const Container=styled.div`
padding:20px;
display:flex;
`
export const Products = () => {
  return (
    <Container>

{popularProducts.map(item=>(<Product item={item} key={item.id}/>))}
    </Container>
      

  )
}
