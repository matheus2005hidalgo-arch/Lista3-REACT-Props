function CardProduto({ nome, preco }) {
  return (
    <div className="card-simples">
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
    </div>
  )
}

function ListaProdutos({ produtos }) {
  return (
    <div className="lista-simples">
      {produtos.map((produto) => (
        <CardProduto key={produto.id} nome={produto.nome} preco={produto.preco} />
      ))}
    </div>
  )
}

function Exercicio22() {
  const produtos = [
    { id: 1, nome: 'Teclado', preco: 120 },
    { id: 2, nome: 'Mouse', preco: 80 },
    { id: 3, nome: 'Monitor', preco: 900 },
  ]

  return <ListaProdutos produtos={produtos} />
}

export default Exercicio22
