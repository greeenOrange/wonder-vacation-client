import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import useAdmin from '../Hook/useAdmin/useAdmin';
import useAuth from '../Hook/useAuth';
import { Link, Outlet} from 'react-router-dom';
import MyOrder from '../Pages/MyOrder/MyOrder';
import AllOrders from './Order/AllOrders';
import AddPackages from './AddPackages/AddPackages';
import RemovePackages from './AddPackages/RemovePackages/RemovePackages';
import './Dashboard.css'

const Dashboard = () => {
  const {user, logout} = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin] = useAdmin(user);


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
        // <div className='dashboard-section'>
        //   <h1>Your DASHBOARD</h1>
        //   <Outlet></Outlet>
        //    <button className="btn p-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
        //    <FontAwesomeIcon icon={faBars} />
        //    </button>
        //     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasRightLabel">
        //     <div className="offcanvas-header">
        //         <h5 id="offcanvasRightLabel">Dashboard Menu</h5>
        //         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //     </div>
        //     <div className="offcanvas-body">

        //   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //   <Link className="nav-link active" aria-current="page" to="/dashboard/myorder">My order</Link>

        // {admin &&(
        //   <>
        //   <Link className="nav-link" to="/dashboard/allusers">All Users</Link>
        //   <Link className="nav-link" to="/dashboard/addpackage">Addpackage</Link>
        //   <Link className="nav-link" to="/dashboard/removepackage">Remove Packages</Link>
        //   </>
        // )

        // }
        //     </div>
        //     </div>
        // </div>
//         <>
//         <header class="offcanvas-menu">
// 	<input type="checkbox" id="toogle-menu" />

// 	<label for="toogle-menu" class="toogle-open"><span></span></label>

// 	<nav>
// 		<div>
// 			<a href="#"> <i class="fab fa-css3-alt"></i>offcanvas </a>
// 			<label for="toogle-menu" class="toogle-close">
// 				<span></span>
// 			</label>
// 		</div>
// 		<ul>
// 			<li><Link to="/">Home </Link></li>
// 			{/* <li><Link to="/dashboard">My ordrs </Link></li> */}
// 			<li><Link href="#section3">Section </Link></li>
// 			<li><Link href="#section4">Section </Link></li>
// 			<li><a href="#section5">Section </a></li>
// 		</ul>
// 	</nav>
// </header>

// <main>
// <div className="content">
//   <h4>Dashboard</h4>
//         {/* <Outlet /> */}
//       </div>
// </main>
// </>
      <div className='dashboard-section'>
        <div className="container">
           <button className="btn dash-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
           <span className="navbar-toggler-icon"></span>
           <FontAwesomeIcon icon={faBars} />
           </button>

        <div className="row">
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Dashboard Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/dashboard">My Orders</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/addreview">add review</Link></li>
        {isAdmin && <>
            <li className="nav-item"><Link className="nav-link" to="/dashboard/manageProducts">Manage Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard/manageOrders">Manage Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard/addProduct">Add Product</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/dashboard/makeAdmin">Make Admin</Link></li>
          </>}
        </ul>
            </div>
            </div>
            <div className="col-md-12">
          <div className="dashboard-content">
                <Outlet></Outlet>
            </div>
            </div>
      </div>
      </div>
    </div>

    );
};

export default Dashboard;