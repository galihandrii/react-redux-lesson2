
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Discovery from './Pages/Discovery';
import ProtectedRoute from './hoc/Protectedroute';
import AddCar from './Pages/AddCar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>;
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route  element={<ProtectedRoute/>}>
      <Route path='/Discovery' element={<Discovery/>}/>
      <Route path='/add-car' element={<AddCar/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
