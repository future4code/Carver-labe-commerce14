import React from 'react';

class Carrinho extends Component {
 
  state = {
    min: 0,
    max: 10,
    carrinho: [{
      id: Date.now,
      nome:'',
      img: '',
      preco:'',
      quantidade: ''
    }]

  }

  onProdutoAddCarrinho = (id) => {
    const existe = this.state.carrinho.find(produto => id === produto.id)

    if(existe) {
      const novoCarrinho = this.state.carrinho.map(produto => {
        if(id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({carrinho: novoCarrinho})
    } else {
      this.setState({
        carrinho:[...this.state.carrinho, {nome, quantidade:1, valor}]
      }) 

  onPodutosRemovidosDoCarrinho = (id) =>
{
  const protudoRenovCarrinho = this.state.carrinho.map((produto) => {
    if(produto.id === id) {
      return {
        ...produto,
        quantidade: produto.quantidade - 1
      }
    }
    return produto
  }).filter((produto) => produto.quantidade > 0)

  this.setState({carrinho: protudoRenovCarrinho})
}

render() 
  return (
    <div style={{ borderWidth: 1, borderStyle: "solid" }}>
      <h1>Meu carrinho de compras</h1>
      <button
        onClick={() =>
          this.onProdutoAddCarrinho({ id: "1", name: "Aeronave", valor: 10 })
        }
      >
        Adicionar produto 1
      </button>
      <button
        onClick={() =>
          this.adicionaProduto({ id: "2", name: "capacete-espacial", valor: 20 })
        }
      >
        Adicionar produto 2
      </button>
      <h3>Meus itens</h3>
      <ul>
        {this.state.carrinho.map((item) => (
          <li key={item.id}>
            {`${item.nome} s- Quantidade: ${item.quantidade} - Valor: ${
              item.preco * item.quantidade
            }`}
          </li>
        ))}
      </ul>
    </div>
  )}
}}




export default Carrinho;