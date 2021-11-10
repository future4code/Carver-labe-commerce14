import React from 'react'
import styled from 'styled-components'
import '../App.css'

export default class CardProduto extends React.Component {
  render() {
    return (
      <div className="CardProduto">
        <img src={this.props.imagem} alt={this.props.titulo} />
        <h4>{this.props.titulo}</h4>
        <h4>R$ {this.props.valor}</h4>
        <button className="botao-card">{this.props.nomeBotao}</button>
      </div>
    )
  }
}
