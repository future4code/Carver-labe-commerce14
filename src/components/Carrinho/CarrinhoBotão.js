import React, { Component } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`

class Carrinho extends Component {
  
  
  render() {
    return <ItemContainer>
      <p>{this.props.item.quantidade}x</p>
      <p>{this.props.item.name}</p>
      <button 
        onClick={() => this.props.removeProduto(this.props.item.id)}
      >
        Remover
      </button>
    </ItemContainer>
  
  
/*   render() {
    return (
        <ul>
          {this.props.items.map((item) => (
            <li>{`${item.name} - preco R$ ${item.valor} `}</li>
          ))}
        </ul>
      )

    }
  } */
  
}
}
  
export default Carrinho;