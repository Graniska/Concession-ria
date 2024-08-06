
   const {listarCarros} = require('./listar.js')
    
    function atualizarCarros(exibirMenu) {
        listarCarros()
            let numero = prompt('Digite o numero do carro que deseja atualizar: ')
                let indice = parseInt(numero) -1
                    if (indice < 0 || indice > carros.length) {
                        console.log("Carro não encontrado, tente novamente: ")
                            atualizarCarros()
                    } else {
                        console.log("==> Atualizando Dados... <==")
                        let marca = prompt('Marca do carro: ')
                        let nome = prompt('Nome do carro: ')
                        let preco = prompt('Preço do carro: ')
                        let ano = prompt('Ano de lançamento: ')
                            carros[indice] = {marca, nome, preco, ano}
                                console.log("==> Carro Registrado com sucesso <==")
                            }
                exibirMenu()
        } 
            module.exports = {atualizarCarros}