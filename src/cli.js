import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto  </string>", "Caminho a ser processado")
  .option("-d, --destino  </string>", "Caminho de destino")
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error("erro: favor inserir caminho de origem e destino");
      program.help();
      return;
    }
  });

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    const resultato = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (erro) {
    trataErros(erro);
  }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado com sucesso");
  } catch (erro) {
    throw erro;
  }
}

// function criaESalvaArquivo(listaPalavras, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);

//   fs.promises
//     .writeFile(arquivoNovo, textoPalavras)
//     .then(() => {
//       // processamento feito com o resultado da promessa
//       console.log("Arquivo criado com sucesso");
//     })
//     .catch((erro) => {
//       throw erro;
//     })
//     .finally(() => {
//       // processamento feito após o término da promessa, independentemente do resultado
//       console.log("Processamento concluído");
//     });
// }
