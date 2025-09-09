import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'

import * as enums from '../../utils/enums/Tarefas'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      2
    ),
    new Tarefa(
      'Estudar Vue.JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      3
    ),
    new Tarefa(
      'Terminar tarefa do módulo',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) =>
      (state = state.filter((tarefa) => tarefa.id !== action.payload))
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
