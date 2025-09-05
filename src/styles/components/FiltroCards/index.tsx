import * as S from './styles'

export type Props = {
  ativo?: boolean
}

export const FiltroCards = (props: Props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>3</S.Contador>
      <S.Label>tarefas</S.Label>
    </S.Card>
  )
}
export default FiltroCards
