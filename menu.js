    const {atualizarCarros} = require ("./atualizar.js")
    const {adicionarCarros} = require('./adicionar.js')
    const {listarCarros} = require ("./listar.js")
    const {removerCarros} = require ("./remover.js")
        
    //esqueceu de chamar todas as funções que serão usadas no modulo
    
    function exibirMenu() {
        console.log("====CONCESSIONÁRIA==MENU====" +
            "\n 1. adicionar " +
            "\n 2. listar " +
            "\n 3. atualizar " +
            "\n 4. remover " +
            "\n 5. SAIR "
        ) 
            let opcao = prompt ("O que gostaria de fazer hoje?")

                switch (opcao) {
                    case "1":
                        adicionarCarros(exibirMenu)
                        break;
                        case "2":
                        listarCarros()
                        exibirMenu()
                        break;
                        case "3":
                        atualizarCarros(exibirMenu)
                        break;
                        case "4":
                        removerCarros(exibirMenu)
                        break;
                        case "5":
                        console.log("==> Sessão Encerrada <==")
                        return
                        break;
                    default:
                        console.log("===> Opção inválida, tente novamente:  <===")
                            exibirMenu()
                        break;
                }
        }

    module.exports = {exibirMenu}