import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefas'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
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
            <S.RedButton>Excluir</S.RedButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Tarefa
