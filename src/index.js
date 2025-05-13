const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "uft-8", (erro, texto) => {
  console.log(texto);
});
