import './App.css';
import HowtoUsepg from './Pages/HowtoUsepg';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/loginpg'
import TheTeampg from './Pages/TheTeampg'
import { Route, Routes } from 'react-router-dom';
import UserTeam from './Pages/UserTeam'
import UserHowtoUsepg from './Pages/UserHowToUse'
import DriverPage from './Pages/DriverPage';
import UserPage from './Pages/UserPage';
import AddGarbage from './Pages/AddGarbage';
import OrderStatuspg from './Pages/OrderStatuspg'
import DriverTeam from './Pages/DriverTeam';
import DriverTasks from './Pages/DriverTasks';
import Heatmap from './Pages/Heatmap';
import AdminPage from './Pages/AdminPage';
import AssignTaskpg from './Pages/AssignTaskpg';
import RegisterPg from './Pages/RegisterPg';
import privateRouterUser from './components/privaterouter';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={<LoginPage/>}/>
          <Route path='/howtouse' element={<HowtoUsepg/>}/>
          <Route path='/team' element={<TheTeampg/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/Userteam' element={<UserTeam/>}/>
          <Route path='/UserHowtoUse' element={<UserHowtoUsepg/>}/>
          <Route path='/AddGarbage' element={<AddGarbage/>}/>
          <Route path='/ReqStatus' element={<OrderStatuspg/>}/>
          <Route path='/Logout' element={<LandingPage/>}/>
          <Route path='/worker' element={<DriverPage/>}/>
          <Route path='/driverteam' element={<DriverTeam/>}/>
          <Route path='/driverTasks' element={<DriverTasks/>}/>
          <Route path='/Heatmap' element={<Heatmap/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/AssignTask' element={<AssignTaskpg/>}/>
          <Route path='/signup' element={<RegisterPg/>}/>
        </Routes>
        
    </div>
  );
}

export default App;