function Alerta({ tipo, mensagem }) {
  const cores = {
    sucesso: 'green',
    erro: 'red',
    aviso: 'orange',
  }

  return <p style={{ color: cores[tipo] }}>{mensagem}</p>
}

function Exercicio24() {
  return <Alerta tipo="sucesso" mensagem="Operacao realizada com sucesso!" />
}

export default Exercicio24
