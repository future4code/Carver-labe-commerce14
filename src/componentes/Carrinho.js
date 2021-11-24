import React, { Component } from "react";
 
class Carrinho extends Component {

  
  render() {
    return (
      <ul>
        { () this.props.items.map((item) => (
          <li>{`${item.name} - Quantidade: ${item.quantidade} Valor: ${
            item.valor * item.quantidade
          }`}</li>
        ))}
      </ul>
    );
        }
      }