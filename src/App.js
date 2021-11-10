import React, { Component } from 'react'
import styled from 'styled-components'
import CardProduto from './components/CardProduto'
import {
  BoxPagina,
  Filtros,
  HeaderProdutos,
  Cards,
  Carrinho,
  CardProdutoStyle
} from './styles'

class App extends Component {
  render() {
    return (
      <BoxPagina>
        <Filtros>
          <h1>Filtros</h1>
          <h4>Valor mínimo:</h4>
          <input type="number" min="100" max="500" />
          <h4>Valor máximo:</h4>
          <input type="number" min="100" max="500" />
          <h4>Buscar:</h4>
          <input type="text" placeholder="Nome do produto" />
        </Filtros>

        <HeaderProdutos>
          <h1>Quantidade de produtos:</h1>
          <h1>Ordenação:</h1>
          <select>
            <option tabIndex={0} value="crescente" selected>
              Crescente
            </option>
            <option tabIndex={6} value="decrescente">
              Decrescente
            </option>
          </select>
        </HeaderProdutos>

        <Cards>
          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://thumbs.dreamstime.com/b/sat%C3%A9lite-real%C3%ADstico-ilustra%C3%A7%C3%A3o-do-vetor-d-tecnologia-sem-fio-isolado-no-fundo-branco-141172069.jpg'
              }
              titulo={'Satélites antigos'}
              valor={'300'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>

          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://www.maxuta.com/maxuta/collections/034_space_zvezda/034001_sokol_kv_2_display_cover_01.jpg'
              }
              titulo={'Roupas espaciais'}
              valor={'200'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>

          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://cdn.iset.io/assets/37657/produtos/6365/cdep337.jpg'
              }
              titulo={'Camisetas espaciais'}
              valor={'50'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>

          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://www.infoescola.com/wp-content/uploads/2020/06/img_5eecddeaa3386.png'
              }
              titulo={'Meteoritos'}
              valor={'300'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>

          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://legobrasil.vteximg.com.br/arquivos/ids/173593-1000-600/lego_10283_creator_expert_onibus_espacial_discovery_da_nasa_03.jpg?v=637576612127630000'
              }
              titulo={'Ônibus espacial'}
              valor={'800'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>

          <CardProdutoStyle>
            <CardProduto
              imagem={
                'https://s2.glbimg.com/Vzpa4A8c6yeVX75orw82sj3NOug=/620x350/e.glbimg.com/og/ed/f/original/2021/02/08/116733900_gettyimages-651427181.jpg'
              }
              titulo={'Viagens espaciais'}
              valor={'1.000'}
              nomeBotao={'Adcionar ao carrinho'}
            />
          </CardProdutoStyle>
        </Cards>

        <Carrinho>
          <h1>Protutos e total - Bruna</h1>
        </Carrinho>
      </BoxPagina>
    )
  }
}

export default App
