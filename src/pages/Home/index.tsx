import NewTask from '../../components/NewTask'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <SideBar />
    <ToDoList />
    <NewTask />
  </>
)

export default Home
