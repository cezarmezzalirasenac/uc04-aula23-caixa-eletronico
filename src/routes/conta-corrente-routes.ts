import express, { Request, Response } from "express";
import ContaCorrente from "../classes/conta-corrente";

const contaCorrenteRoutes = express.Router();

const contas: ContaCorrente[] = [
  new ContaCorrente(
    1234,
    1,
    "Cezar Augusto",
    "1234123421",
    new Date("1990-07-12"),
    new Date()
  ),
];

// GET /:id -> Retornar a conta corrente pelo id
contaCorrenteRoutes.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send({ error: "Id da conta inválido" });
    return;
  }

  const conta = contas.find((c) => c.id === id);
  if (!conta) {
    res.status(404).send({ error: "Conta não encontrada" });
    return;
  }
  const {
    id: idConta,
    agencia,
    numero,
    nomeCliente,
    cpf,
    dataNascimento,
    dataCriacao,
    saldo,
  } = conta;

  res.send({
    id: idConta,
    agencia,
    numero,
    nome_cliente: nomeCliente,
    cpf,
    data_nascimento: dataNascimento,
    data_criacao: dataCriacao,
    saldo,
  });
});

// POST /autenticacao

// GET /:agencia/:numero

// GET /:agencia/:numero/saldo

// PATCH /saldo

// DELETE /

export { contaCorrenteRoutes };
