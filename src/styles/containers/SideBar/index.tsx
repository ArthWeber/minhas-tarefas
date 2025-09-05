import FiltroCards from '../../components/FiltroCards'

import * as S from './styles'

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCards />
          <FiltroCards />
          <FiltroCards />
          <FiltroCards />
          <FiltroCards />
          <FiltroCards ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default SideBar
