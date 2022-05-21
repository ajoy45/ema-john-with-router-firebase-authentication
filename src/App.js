
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup'
import ProtectedPage from './components/ProtectedPage/ProtectedPage';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={  <Shop></Shop> }></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <ProtectedPage>
             <Inventory></Inventory>
          </ProtectedPage>
        
        }></Route>
        <Route path="/shipment"element={
          <ProtectedPage>
            <Shipment></Shipment>
          </ProtectedPage>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
