import styled from 'styled-components'
import vars from '../../styles/vars'

import * as enums from '../../utils/enums/Tarefas'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function bgReturn(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return vars.amarelo
    if (props.status === enums.Status.CONCLUIDA) return vars.verde
  } else if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return vars.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return vars.importante
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-botton: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => bgReturn(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Actions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const SaveButton = styled(Button)`
  background-color: ${vars.verde};
`

export const YellowButton = styled(Button)`
  background-color: ${vars.amarelo};
`

export const RedButton = styled(Button)`
  background-color: ${vars.vermelho};
`

export const ImportantButton = styled(Button)`
  background-color: ${vars.importante};
`
