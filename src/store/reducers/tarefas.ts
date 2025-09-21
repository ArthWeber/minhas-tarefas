import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'

import * as enums from '../../utils/enums/Tarefas'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: '',
      id: 1
    },
    {
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: '',
      id: 2
    },
    {
      titulo: 'Estudar Vue.JS',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: '',
      id: 3
    },
    {
      titulo: 'Terminar tarefa do módulo',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: '',
      id: 4
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) state.itens[indexTarefa] = action.payload
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
