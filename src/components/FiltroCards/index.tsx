import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  label: string
}

export const FiltroCards = ({ ativo, contador, label }: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}
export default FiltroCards
