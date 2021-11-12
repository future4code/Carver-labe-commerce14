import React from "react";
import{CarrinhoCompras} from './components/Carrinho/CarrinhoCompras';;
import styled from "styled-components";

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

 
const produtos = [
  { id: 1, name: "Roupa Espacia", valor: 100 },
  { id: 2, name: "Satelite", valor: 500 },
  {id:3, name:"Comida em pasta", valor:50}
];
 
class App extends React.Component {
  state = {
    carrinho: [{ id: 1, name: "Roupa Espacia", valor: 100 },
    { id: 2, name: "Satelite", valor: 500 },
    {id:3, name:"Comida em pasta", valor:50, quantidade:10}],
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
  
  removeProduto = (id)=>{
    const produtoSelecionado = produtos.find((produto) => produto.id === id)
    const retira = this.state.carrinho.find((elem) => elem.id === id);
    if (retira) {
      const removeDoCarrinho = this.state.carrinho.map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      }).filter((produto) => produto.quantidade > 0)
      this.setState({ carrinho: removeDoCarrinho });
  }
  }

  render() {
    return (
      <AppStyle>
       
       <CarrinhoCompras
       carrinho={this.state.carrinho}
        removeProduto={this.removeProduto}
        />
      </AppStyle>
    );
  }
}

export default App;
