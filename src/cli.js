import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";

const fs = require("fs");
const trataErros = require("./erros/funcoesErro");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf8", (erro, texto) => {
  if (erro) throw erro;
  try {
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro);
  }
});
