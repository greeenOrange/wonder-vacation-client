import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useAdmin from '../Hook/useAdmin/useAdmin';
import useAuth from '../Hook/useAuth';
import { Link, Outlet} from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  const {user, logout} = useAuth();
  const [admin] = useAdmin(user);

    return (
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
        {admin && <>
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