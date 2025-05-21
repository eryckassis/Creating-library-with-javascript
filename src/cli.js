import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { fileURLToPath } from "url";
import path from "path";

const fs = require("fs");
const trataErros = require("./erros/funcoesErro");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, "utf8", (erro, texto) => {
  if (erro) throw erro;
  try {
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavras, edereco) {
  const arquivoNovo = `${edereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado com sucesso");
  } catch (erro) {
    throw erro;
  }
}
