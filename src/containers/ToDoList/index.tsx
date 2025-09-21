import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltro = (quantidade: number) => {
    let mensagem = ''
    const compl = termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas marcadas como todas
      ${compl}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como ${valor} ${compl}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltro(tarefas.length)

  return (
    <Container>
      <p>{mensagem}</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              descricao={t.descricao}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ToDoList
