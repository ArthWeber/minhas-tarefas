import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ToDoList />
      </Container>
    </Provider>
  )
}

export default App
