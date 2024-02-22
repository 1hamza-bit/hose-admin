import './App.css'
import Dashboard from './Screens/Dashboard/Dashboard'
import SignIn from './Screens/Login/Login'
import Order from './Screens/Orders/Order'
import Create from './Screens/Product/Create'
import IconMenu from './components/Layout/Sidebar'

function App() {
  return (
    <>
      <div className="ml-[300px] px-12 mt-20">
        <IconMenu/>
        <Create/>
      </div>
    </>
  )
}

export default App
