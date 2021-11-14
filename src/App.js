import React, { Component } from 'react'
import CardProduto from './components/CardProduto'
import {
  Container,
  CartaoCard,
  Filtros,
  HeaderProdutos,
  Carrinho,
} from './styles'


class App extends Component {

  products = [
    {
      id: 1,
      name: "Satélites antigos",
      price: 200,
      photo: 'https://thumbs.dreamstime.com/b/sat%C3%A9lite-real%C3%ADstico-ilustra%C3%A7%C3%A3o-do-vetor-d-tecnologia-sem-fio-isolado-no-fundo-branco-141172069.jpg'


    },
    {
      id: 2,
      name: "Roupas espaciais",
      price: 200,
      photo: 'https://www.maxuta.com/maxuta/collections/034_space_zvezda/034001_sokol_kv_2_display_cover_01.jpg'


    },
    {
      id: 3,
      name: "Camisetas espaciais",
      price: 50,
      photo: 'https://cdn.iset.io/assets/37657/produtos/6365/cdep337.jpg'


    },
    {
      id: 4,
      name: "Meteoritos",
      price: 300,
      photo: 'https://www.infoescola.com/wp-content/uploads/2020/06/img_5eecddeaa3386.png'


    },
    {
      id: 5,
      name: "Ônibus espacial",
      price: 800,
      photo: 'https://legobrasil.vteximg.com.br/arquivos/ids/173593-1000-600/lego_10283_creator_expert_onibus_espacial_discovery_da_nasa_03.jpg?v=637576612127630000'


    },
    {
      id: 6,
      name: "Viagens Espaciais",
      price: 1.000,
      photo: 'https://s2.glbimg.com/Vzpa4A8c6yeVX75orw82sj3NOug=/620x350/e.glbimg.com/og/ed/f/original/2021/02/08/116733900_gettyimages-651427181.jpg'


    }
  ]

  state = {
    minValue: 0,
    maxValue: 100000,
    name: "",
    products: this.products
  }

  filterMinValue = (event) => {
    this.setState({
      minValue: event.target.value,
      products: this.products.filter(f => event.target.value === '' || f.price >= event.target.value)
    })

  }

  findMaxValue = (event) => {
    this.setState({
      maxValue: event.target.value,
      products: this.products.filter(f => event.target.value === '' || f.price <= event.target.value)
    })
  }

  findName = (event) => {
    this.setState({
      name: event.target.value,
      products: this.products.filter(f => f.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
    })
  }

  render() {
    return (
      <Container>

        <Filtros>
          <h1>Filtros</h1>
          <h4>Valor mínimo:</h4>
          <input type="number"
            valeu={this.props.minimo}
            onChange={this.filterMinValue} />

          <h4>Valor máximo:</h4>
          <input type="number"
            valeu={this.props.maximo}
            onChange={this.findMaxValue} />

          <h4>Buscar:</h4>
          <input type="text" placeholder="Nome do produto"
            valeu={this.props.buscar}
            onChange={this.findName} />
        </Filtros>
        <div>
          <HeaderProdutos>
            <h1>Quantidade de produtos:</h1>
            <div>
              <h1>Ordenação:</h1>
              <select>
                <option tabIndex={0} value="crescente" selected>
                  Crescente
                </option>
                <option tabIndex={6} value="decrescente">
                  Decrescente
                </option>
              </select>
            </div>
          </HeaderProdutos>
          <CartaoCard>
            {this.state.products.map(product => {
              return <CardProduto key={product.id}
                imagem={product.photo}
                titulo={product.name}
                valor={product.price}
                nomeBotao={'Adcionar ao carrinho'}
              />
            })}
          </CartaoCard>
        </div>

        <Carrinho>
          <h1>Protutos e total - Bruna</h1>
        </Carrinho>
      </Container>
    )
  }
}

export default App;
