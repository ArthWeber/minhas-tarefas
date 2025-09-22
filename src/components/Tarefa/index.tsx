import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefas'
import * as enums from '../../utils/enums/Tarefas'

import * as S from './styles'
import { SaveButton } from '../../styles'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Title>
          {editing && <em>Editando: </em>}
          {titulo}
        </S.Title>
      </label>
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
