const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf8", (erro, texto) => {
  verificaPalavraDuplicadas(texto);
});

function verificaPalavraDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // objeto[propiedade] = valor;
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado);
}
