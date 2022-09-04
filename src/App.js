import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddPackages from './Dashboard/AddPackages/AddPackages';
import RemovePackages from './Dashboard/AddPackages/RemovePackages/RemovePackages';
import AllUsers from './Dashboard/AllUsers/AllUsers';
import Dashboard from './Dashboard/Dashboard';
import AllOrders from './Dashboard/Order/AllOrders';
import Payment from './Dashboard/Payment/Payment';
import Review from './Dashboard/Review/Review';
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
      {/* <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard>

        <Route index element={<MyOrder />}/>
        <Route path='/allorders' element={<AllOrders />} />
        <Route path='allusers' element={<AllUsers />} />
        <Route path='/allusers/:email' element={<AllUsers />} />
        <Route path='/addpackage' element={<AddPackages />} />
        <Route path='removepackage' element={<RemovePackages />} />
        <Route path='/dashboard/payment/:id' element={<Payment />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="aboutus" element={<AboutUs />}/>
        </Dashboard>
        
        </PrivateRoute>} />
        
    </Routes> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/addreview" element={<Review />}/>
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path='/allusers/:email' element={<AllUsers />} />
        <Route path="/dashboard" element={
            <Dashboard />
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment />} />
          <Route path="manageProducts" element={
              <RemovePackages></RemovePackages>
          }></Route>
          <Route path="manageOrders" element={
              <AllOrders></AllOrders>
          }></Route>
          <Route path="addProduct" element={
              <AddPackages></AddPackages>
          }></Route>
          <Route path="makeAdmin" element={
              <AllUsers></AllUsers>
          }></Route>
          <Route path="aboutUs" element={
              <AboutUs></AboutUs>
          }></Route>
        </Route>

      </Routes>
      </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;