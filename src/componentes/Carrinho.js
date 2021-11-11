import React from 'react';


CarrinhoDeCompra = () =>{

    valorTotal = () => {
        let valorTotal = 0
    
        for(let produto of this.produtosCarrinho) {
          valorTotal += produto.preco * produto.quantidade
        }
    
        return valorTotal
      }
    }    
