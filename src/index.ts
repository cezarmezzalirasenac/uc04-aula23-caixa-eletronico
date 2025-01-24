import ContaCorrente from "./classes/conta-corrente";

const conta = new ContaCorrente(
  1234,
  1,
  "Cezar",
  "11122233344",
  new Date("1990-07-12"),
  new Date("2009-12-31")
);

try {
  console.log("Saldo Inicial: ", conta.saldo);
  conta.setSaldo(100, "C");
  console.log("Saldo atual", conta.saldo);

  conta.setSaldo(10, "D");
  console.log("Saldo atual", conta.saldo);

  conta.setSaldo(100, "D");
  console.log("Saldo atual", conta.saldo);
} catch (error: any) {
  console.log(`Erro ao executar operação: ${error.message}`);
}

console.log(conta);
