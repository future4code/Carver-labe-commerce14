import React from 'react'
import { CartaoCard } from '../styles'
import { TextoCard } from '../styles'
import { Card } from '../styles'



export default class CardProduto extends React.Component {
  render() {
    return (
      <CartaoCard>
        <Card>
        <img src={this.props.imagem} alt={this.props.titulo} />
        <TextoCard>
        <h4>{this.props.titulo}</h4>
        <h4>R$ {this.props.valor}</h4>
        <button>{this.props.nomeBotao}</button>
        </TextoCard>
        </Card>
      </CartaoCard>
    )
  }
}
