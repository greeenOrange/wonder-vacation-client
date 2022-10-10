import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddPackages from './Dashboard/AddPackages/AddPackages';
import RemovePackages from './Dashboard/AddPackages/RemovePackages/RemovePackages';
import AllUsers from './Dashboard/AllUsers/AllUsers';
import Dashboard from './Dashboard/Dashboard';
import MyOrder from './Dashboard/MyOrder/MyOrder';
import AllOrders from './Dashboard/Order/AllOrders';
import Payment from './Dashboard/Payment/Payment';
import Review from './Dashboard/Review/Review';
import Login from './Login/Login';
import Register from './Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Destination from './Pages/Destination/Destination';
import Header from './Pages/Header/Header';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home';
import PackageBooking from './Pages/PackageBooking/PackageBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Header></Header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/blog" element={
              <Destination />
          } />
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path='/allusers/:email' element={<AllUsers />} />
        <Route path="/makeAdmin" element={
              <AllUsers />
          }></Route>
        <Route path="/dashboard" element={
            <Dashboard />
        }>
          <Route index element={<MyOrder></MyOrder>} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path="manageProducts" element={
              <RemovePackages />
          } />
          <Route path="manageOrders" element={
              <AllOrders />
          } />
          <Route path="addProduct" element={
              <AddPackages />
          } />
          <Route path="makeAdmin" element={
              <AllUsers />
          } />
          <Route path="addreview" element={
          <Review />
          }/>
        </Route>

      </Routes>
      </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;