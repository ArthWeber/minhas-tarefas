import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefas'

import { Campo } from '../../styles'
import * as S from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCards
            valor={enums.Status.PENDENTE}
            criterio="status"
            label="pendentes"
          />
          <FiltroCards
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            label="concluídas"
          />
          <FiltroCards
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            label="urgentes"
          />
          <FiltroCards
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            label="importantes"
          />
          <FiltroCards
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            label="normal"
          />
          <FiltroCards criterio="todas" label="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default SideBar
