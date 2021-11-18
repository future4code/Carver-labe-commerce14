import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0fr 3fr 1fr;
  gap: 10px;
  width: 100%;
  

`
export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  font: 20px times new;
  
  label{
    display:flex;
    flex-direction: column;
    padding: 10px 0;
  }
  input {
    height: 30px;
    font-size: 15px;
    cursor: pointer;
  }
  
`

export const HeaderProdutos = styled.div`
  display: flex;
   width: 100%;
  font: 10px times new;
  justify-content: space-between;
  align-items: baseline;
  
 select {
    height: 5vh;
    margin-top: 3vh;
    cursor: pointer;
  } 
  div{
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
`

export const CartaoCard = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
padding: 16px;
margin: 10px;;

img{
 width: 15em;
 height: 15em;
  
}

`
export const Card = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
width: 100%;
box-shadow: 0 4px 8px 0 gray;


`

export const TextoCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font: 20px times new;

h4{
  margin: 0 16px;
  padding: 10px;
}
button{
background: white;
color: black;
height: 50px;
width: 100px;
}

`

export const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  font: 20px times new;
  
  
`
