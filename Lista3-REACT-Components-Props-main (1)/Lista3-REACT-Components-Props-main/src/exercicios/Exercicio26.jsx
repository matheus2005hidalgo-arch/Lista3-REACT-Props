function Modal({ titulo, conteudo, rodape }) {
  return (
    <div className="card-simples">
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
      <small>{rodape}</small>
    </div>
  )
}

function Exercicio26() {
  return (
    <Modal
      titulo="Meu Modal"
      conteudo="Conteudo recebido por props."
      rodape="Rodape do modal"
    />
  )
}

export default Exercicio26
