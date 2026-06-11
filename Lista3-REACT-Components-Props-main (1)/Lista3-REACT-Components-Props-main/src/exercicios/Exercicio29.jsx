function ListaFiltrada({ lista, criterio }) {
  const itens = lista.filter(criterio)

  return (
    <ul>
      {itens.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  )
}

function Exercicio29() {
  const alunos = [
    { id: 1, nome: 'Daniel', aprovado: true },
    { id: 2, nome: 'Bruno', aprovado: false },
    { id: 3, nome: 'Ana', aprovado: true },
  ]

  return <ListaFiltrada lista={alunos} criterio={(aluno) => aluno.aprovado} />
}

export default Exercicio29
