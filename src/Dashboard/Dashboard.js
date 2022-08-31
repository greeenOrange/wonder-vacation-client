import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import './Dashboard.css'

const Dashboard = () => {
  const {user, logout} = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/users/makeadmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
    return (
        <div className='dashboard-section'>
           <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
           <span className="navbar-toggler-icon"></span>
           DashBoard
           </button>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Dashboard Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* {isAdmin &&(
          <>
          <li className="nav-item">
          <a className="nav-link" href="/addusers">Add user</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/makeadmin">make admin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addpackage">addpackage</a>
        </li>
          </>
        )

        } */}
          <>
          <li className="nav-item">
          <a className="nav-link" href="/addusers">Add user</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/makeadmin">make admin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addpackage">addpackage</a>
        </li>
          </>
        </ul>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;