function TabelaGenerica({ colunas, dados }) {
  return (
    <table>
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={coluna}>{coluna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {colunas.map((coluna) => (
              <td key={coluna}>{item[coluna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Exercicio25() {
  const colunas = ['nome', 'idade', 'cidade']
  const dados = [
    { nome: 'Daniel', idade: 18, cidade: 'Sao Paulo' },
    { nome: 'Ana', idade: 22, cidade: 'Curitiba' },
  ]

  return <TabelaGenerica colunas={colunas} dados={dados} />
}

export default Exercicio25
