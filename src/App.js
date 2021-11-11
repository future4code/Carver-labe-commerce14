import React from "react";
import Carrinho from "./components/Carrinho";
 
const produtos = [
  { id: 1, name: "Cerveja", valor: 10 },
  { id: 2, name: "Salada", valor: 5 },
];
 
class App extends React.Component {
  state = {
    carrinho: [],
  };
 
  adicionaProduto = (id) => {
    const produtoSelecionado = produtos.find((produto) => produto.id === id);
 
    const exists = this.state.carrinho.find((elem) => elem.id === id);
    if (exists) {
      const novoCarrinho = this.state.carrinho.map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }
        return produto;
      });
      this.setState({ carrinho: novoCarrinho });
    } else {
      this.setState({
        carrinho: [
          ...this.state.carrinho,
          {
            id,
            name: produtoSelecionado.name,
            quantidade: 1,
            valor: produtoSelecionado.valor,
          },
        ],
      });
    }
  };

  RemoveProduto = (id) => {
    const produtoSelecionado = produtos.find((produto) => produto.id === id)

    const novoCarrinho = this.state.carrinho.map((produto) => {
      if (produto.id === id) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1,
        };
      }
    return produto
  }).filter((produto) => produto.quantidade > 0)

  this.setState({ carrinho: [
    ...this.state.carrinho,
    {
      id,
      name: produtoSelecionado.name,
      quantidade: 1,
      valor: produtoSelecionado.valor,
    },
  ],
});
}

  render() {
    return (
      <div>
        <button onClick={() => this.adicionaProduto(1)}>
          Adiciona produto ficticio 1
        </button>
        <button onClick={() => this.adicionaProduto(2)}>
          Adiciona produto ficticio 2
        </button>
        <button onClick={()=> this.RemoveProduto(1)}>
        Remover
        </button>
        <button onClick={()=> this.RemoveProduto(2)}>
        Remover
        </button>
        <Carrinho items={this.state.carrinho} />
      </div>
    );
  }
}
 
export default App;