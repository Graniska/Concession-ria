
    function adicionarCarros(exibirMenu) {
       
        let marca = prompt ("Digite a marca do carro: ")
        let nome = prompt ("Digite o nome do carro: ")
        let preco = prompt ("Digite o preço do carro: ")
        let ano = prompt ("Digite o ano de lançamento do carro: ")
           
            carros.push({marca, nome, preco, ano})
                
                console.log("==> !!Carro Registrado com sucesso!! <==")
                    exibirMenu() //esqueceu
    }
        module.exports = {adicionarCarros}