import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCards from '../../components/FiltroCards'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefas'

import { Button, Campo } from '../../styles'
import * as S from './styles'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
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
          </>
        ) : (
          <Button type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
export default SideBar
