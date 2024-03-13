import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPrivatePage from './pages/LoginPrivatePage'
import PrivateDashboard from './pages/PrivateDashboard';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route element={<LoginPrivatePage/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
          <Route element={<PrivateDashboard/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
