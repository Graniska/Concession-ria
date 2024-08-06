
  function listarCarros() {
    carros.forEach((objeto, indice) => {
        console.log(`
            ${indice +1}. 
            |Marca: ${objeto.marca}
            |Nome:${objeto.nome}
            |preco:${objeto.preco}
            |ano:${objeto.ano}`)
    });

  }
    module.exports = {listarCarros}