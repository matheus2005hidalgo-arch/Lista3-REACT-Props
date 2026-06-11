function Formulario({ titulo, campos }) {
  return (
    <form className="form-simples">
      <h2>{titulo}</h2>
      {campos.map((campo) => (
        <input key={campo.nome} type={campo.tipo} placeholder={campo.placeholder} />
      ))}
    </form>
  )
}

function Exercicio28() {
  const campos = [
    { nome: 'nome', tipo: 'text', placeholder: 'Nome' },
    { nome: 'email', tipo: 'email', placeholder: 'Email' },
  ]

  return <Formulario titulo="Formulario" campos={campos} />
}

export default Exercicio28
