import EstiloGlobal, { Container } from './styles'
import SideBar from './styles/containers/SideBar'
import ToDoList from './styles/containers/ToDoList'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
