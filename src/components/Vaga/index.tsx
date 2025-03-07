import { LinkVaga, ListaVagas, TituloVaga } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ListaVagas>
    <TituloVaga>{props.titulo}</TituloVaga>
    <ul>
      <ListaVagas>Localizacao: {props.localizacao}</ListaVagas>
      <ListaVagas>Senioridade: {props.nivel}</ListaVagas>
      <ListaVagas>Tipo de contratacao: {props.modalidade}</ListaVagas>
      <ListaVagas>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ListaVagas>
      <ListaVagas>Requisitos: {props.requisitos.join(', ')}</ListaVagas>
    </ul>
    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </ListaVagas>
)

export default Vaga
