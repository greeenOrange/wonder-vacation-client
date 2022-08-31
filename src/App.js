import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddPackages from './Dashboard/AddPackages/AddPackages';
import RemovePackages from './Dashboard/AddPackages/RemovePackages/RemovePackages';
import AddUsers from './Dashboard/AddUsers/AddUsers';
import Dashboard from './Dashboard/Dashboard';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import AllOrders from './Dashboard/Order/AllOrders';
import Payment from './Dashboard/Payment/Payment';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Register from './Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import Destination from './Pages/Destination/Destination';
import Header from './Pages/Header/Header';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import PackageBooking from './Pages/PackageBooking/PackageBooking';
import Packages from './Pages/Packages/Packages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        {/* <Header></Header> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/myorder" element={<MyOrder />}/>
        <Route path='/allorders' element={<AllOrders />} />
        <Route path='/addpackage' element={<AddPackages />} />
        <Route path='/removepackage' element={<RemovePackages />} />
        <Route path='/addusers' element={<PrivateRoute>
          <AddUsers />
        </PrivateRoute>} />
        <Route path='/makeadmin' element={<MakeAdmin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/payment/:id' element={<Payment />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/aboutus" element={<PrivateRoute><AboutUs /></PrivateRoute>}/>
    </Routes>
      </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;