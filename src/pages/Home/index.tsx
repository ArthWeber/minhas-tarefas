import NewTask from '../../components/NewTask'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <SideBar mostrarFiltros />
    <ToDoList />
    <NewTask />
  </>
)

export default Home
