import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefas'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={descricao} />
      <S.Actions>
        {editing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.RedButton onClick={() => setEditing(false)}>
              Cancelar
            </S.RedButton>
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
