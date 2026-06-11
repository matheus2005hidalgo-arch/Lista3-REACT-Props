function PaginaDinamica({ titulo, subtitulo, secoes }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>

      {secoes.map((secao) => (
        <section key={secao.titulo}>
          <h2>{secao.titulo}</h2>
          <p>{secao.texto}</p>
        </section>
      ))}
    </div>
  )
}

function Exercicio30() {
  const secoes = [
    { titulo: 'Sobre', texto: 'Pagina criada com dados via props.' },
    { titulo: 'Contato', texto: 'daniel@email.com' },
  ]

  return (
    <PaginaDinamica
      titulo="Pagina Dinamica"
      subtitulo="Tudo vem de props."
      secoes={secoes}
    />
  )
}

export default Exercicio30
