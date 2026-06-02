

const Container = ({children}) => {
  return (
    <div>
      <h2>este é o titulo do container</h2>
      {children}
    </div>
  )
}

export default Container

// children propriedade que permite passar html dentro do componente, ou seja, o conteudo do componente, e pode ser acessado atraves do children.