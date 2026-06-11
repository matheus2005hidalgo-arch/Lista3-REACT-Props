function InfoCard({ titulo, valor }) {
  return (
    <div className="card-simples">
      <h2>{titulo}</h2>
      <p>{valor}</p>
    </div>
  )
}

function Dashboard({ usuario, vendas, mensagens }) {
  return (
    <div className="lista-simples">
      <InfoCard titulo="Usuario" valor={usuario} />
      <InfoCard titulo="Vendas" valor={vendas} />
      <InfoCard titulo="Mensagens" valor={mensagens} />
    </div>
  )
}

function Exercicio27() {
  return <Dashboard usuario="Daniel" vendas={12} mensagens={5} />
}

export default Exercicio27
