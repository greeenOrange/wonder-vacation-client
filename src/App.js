import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import PackageBooking from './Pages/PackageBooking/PackageBooking';
import Packages from './Pages/Packages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path="home" element={<Home />} />
        <Route path="packages" element={<Packages />}/>
        <Route path="Packagebooking" element={<PackageBooking />}/>
        <Route path="Packagebooking/:id" element={<PackageBooking />}/>
        <Route path="login" element={<Login />}/>
        <Route index path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
