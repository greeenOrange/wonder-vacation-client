import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Register from './Login/Register/Register';
import Cart from './Pages/Cart/Cart';
import Header from './Pages/Header/Header';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home';
import PackageBooking from './Pages/PackageBooking/PackageBooking';
import Packages from './Pages/Packages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <AuthProvider>
     <CartProvider>
        <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/Packagebooking/:id" element={<PackageBooking />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path="/Packagebooking/:id" element={<PrivateRoute><PackageBooking /></PrivateRoute>} /> */}
        {/* <Route path="/Packagebooking/:id" element={<PackageBooking />}/> */}
    </Routes>
     </CartProvider>
  </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
