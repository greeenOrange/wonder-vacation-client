import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddPackages from './Dashboard/AddPackages/AddPackages';
import Dashboard from './Dashboard/Dashboard';
import AllOrders from './Dashboard/Order/AllOrders';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Register from './Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import Destination from './Pages/Destination/Destination';
import Header from './Pages/Header/Header';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home';
import PackageBooking from './Pages/PackageBooking/PackageBooking';
import Packages from './Pages/Packages/Packages';
import Payment from './Pages/Shared/Payment/Payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        {/* <Header></Header> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path='/allorders' element={<AllOrders />} />
        <Route path='/addpackage' element={<AddPackages />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        {/* <Route path="/Packagebooking/:id" element={<PrivateRoute><PackageBooking /></PrivateRoute>} /> */}
        {/* <Route path="/Packagebooking/:id" element={<PackageBooking />}/> */}
    </Routes>
      </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
