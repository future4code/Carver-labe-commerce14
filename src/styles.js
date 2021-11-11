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
  position: relative;
  top: 0;
  margin-left: 0;
  padding: 1vw;
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
  position: relative;
  top: 0;
  height: 10vh;
  width: 60vw;
  border: 1px solid green;
  font: 6px sans-serif;
  justify-content: space-between;
  align-items: center;
  select {
    height: 5vh;
    align-items: center;
    cursor: pointer;
  }
`

export const Cards = styled.div`
  display: grid;
  position: relative;
  top: 12vh;
  height: 70vh;
  width: 60vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 10px;
`

export const CardProdutoStyle = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-items: center;
  border-style: solid;
  border: 1px;

  box-shadow: 0px 0px 5px 1px #868686;
  h4 {
    text-align: center;
    font: 12px sans-serif;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  button {
    display: flex;
    justify-items: center;
    cursor: pointer;
    margin-bottom: 10px;
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
