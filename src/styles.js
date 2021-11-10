import styled from 'styled-components'

export const BoxPagina = styled.body`
  width: 100%;
  padding: 0;
  margin: 0;
`
export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15vw;
  gap: 10px;
  padding: 1vw;
  border: 1px solid red;

  input {
    height: 30px;
    font-size: 15px;
  }
`

export const HeaderProdutos = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  margin-left: 18vw;
  height: 10vh;
  width: 60vw;
  justify-content: center;
  border: 1px solid green;
`

export const Cards = styled.div`
  display: grid;
  position: absolute;
  top: 12vh;
  height: 70vh;
  width: 60vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;
  margin-left: 18vw;
`

export const CardProdutoStyle = styled.div`
  display: grid;

  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  box-shadow: 0px 0px 5px 1px #868686;
  img {
    width: 100%;
    height: 170px;
  }
  button {
    cursor: pointer;
  }
`

export const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 17.8vw;
  gap: 10px;
  padding: 1vw;
  margin-left: 79vw;
  border: 1px solid red;
`
