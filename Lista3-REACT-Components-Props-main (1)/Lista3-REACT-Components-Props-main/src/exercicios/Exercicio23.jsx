function BotaoCustomizado({ texto, cor, tamanho }) {
  return (
    <button
      style={{
        backgroundColor: cor,
        fontSize: tamanho,
        color: 'white',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '6px',
      }}
    >
      {texto}
    </button>
  )
}

function Exercicio23() {
  return <BotaoCustomizado texto="Clique aqui" cor="purple" tamanho="16px" />
}

export default Exercicio23
