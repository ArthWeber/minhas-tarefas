import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { SaveButton } from '../../styles'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefas'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEditing(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.Actions>
        {editing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.RedButton onClick={cancelarEdicao}>Cancelar</S.RedButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.RedButton onClick={() => dispatch(remover(id))}>
              Excluir
            </S.RedButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Tarefa
