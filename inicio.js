  
  
    const prompt = require('prompt-sync')()
        
        const {exibirMenu} = require('./menu.js')

            let carros = []
            
            //esqueceu de colocar o global
            
                global.prompt = prompt
                
                    global.carros = carros
                        
                        exibirMenu()

    