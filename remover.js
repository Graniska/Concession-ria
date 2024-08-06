
        function removerCarros(exibirMenu) {
            //esqueceu da condição para verificar se existe algum carro para ser removido.
            carros.forEach((objeto, index) => {
                console.log(`
                    ${index +1}. 
                    |Marca:${objeto.marca}
                    |preço:${objeto.preco}`)
            });
                let numero = prompt("Digite o numero do Carro que deseja deletar: ")
                let index = parseInt(numero) -1
                    if (index > 0 && index < carros.length) {
                        carros.splice(index, 1)
                            console.log("==> Carro Removido <==")
                                exibirMenu()
                    } else {
                        console.log("==> Carro não encontrado, tente novamente: <==")
                            exibirMenu()
                    }
        }
    module.exports = {removerCarros}