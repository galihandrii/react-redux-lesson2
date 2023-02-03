
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Discovery from './Pages/Discovery';
import ProtectedRoute from './hoc/Protectedroute';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import DetailCar from './Pages/DetailCar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>;
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route  element={<ProtectedRoute/>}>
      <Route path='/Discovery' element={<Discovery/>}/>
      <Route path='/add-car' element={<AddCar/>}/>
      <Route path='/edit-car/:id' element={<EditCar/>}/>
      <Route path='/detail-car/:id' element={<DetailCar/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
