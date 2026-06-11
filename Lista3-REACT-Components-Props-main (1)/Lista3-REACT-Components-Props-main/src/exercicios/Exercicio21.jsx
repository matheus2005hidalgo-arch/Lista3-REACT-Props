function Card({ children }) {
  return <div className="card-simples">{children}</div>
}

function Exercicio21() {
  return (
    <Card>
      <h2>Card com children</h2>
      <p>Esse conteudo foi enviado dentro do componente.</p>
    </Card>
  )
}

export default Exercicio21
