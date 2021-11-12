import React, { Component } from "react";
import{CarrinhoBotão} from './Carrinho'
import styled from "styled-components";

const QuadroCarrinho= styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ProdutosCarrinho = styled.div`
  display: grid;
  gap: 8px;`


  export class CarrinhoCompras extends React.Component {

  getTotalValue = () => {
      let ValorTotal = 0
  
      for(let produto of this.props.produtos) {
        ValorTotal += produto.valor * produto.quantidade
      }
  
      return ValorTotal
  }

    render() {
      return <QuadroCarrinho>
      <h3>Carrinho:</h3>
      <ProdutosCarrinho>
        {this.props.productsInCart.map((produto) => {
          return <CarrinhoBotão 
          item={produto} 
          removeProduto={this.props.removeProduto}
        />
})}
      </ProdutosCarrinho>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </QuadroCarrinho>
    
  }
}

export default ValorTotal;