import FiltroCards from '../../components/FiltroCards'

import * as S from './styles'

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCards contador={0} label="pendentes" />
          <FiltroCards contador={0} label="concluídas" />
          <FiltroCards contador={0} label="urgentes" />
          <FiltroCards contador={0} label="importantes" />
          <FiltroCards contador={0} label="normal" />
          <FiltroCards contador={0} label="todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default SideBar
