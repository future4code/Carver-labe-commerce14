import styled from 'styled-components'

export const BoxPagina = styled.body`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 2fr);
  row-gap: 10px;
  column-gap: 10px;
`
export const Filtros = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1vw;
  position: absolute;
  top: 0;
  border: 1px solid red;
  font: 12px sans-serif;
  input {
    height: 30px;
    font-size: 15px;
    cursor: pointer;
  }
`

export const HeaderProdutos = styled.div`
  display: flex;
  top: 0;

  border: 1px solid green;
  font: 6px sans-serif;
  justify-content: space-between;
  select {
    height: 5vh;
    margin-top: 3vh;
    cursor: pointer;
  }
`

export const Cards = styled.div`
  display: grid;
  position: absolute;
  top: 12vh;
  height: 70vh;
  width: 60vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 20px;
  margin-left: 18vw;
`

export const CardProdutoStyle = styled.div`
  display: grid;
  border-style: solid;
  border: 1px;
  align-items: start;
  justify-items: stretch;
  box-shadow: 0px 0px 5px 1px #868686;
  text-align: center;
  margin-bottom: 5px;
  font: 12px sans-serif;
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
  width: 17vw;
  gap: 10px;
  padding: 1vw;
  margin-left: 79vw;
  border: 1px solid red;
`
