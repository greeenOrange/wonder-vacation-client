import React, { useEffect, useState } from 'react';
import './AllOrders.css'

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(true);

    useEffect(() => {
        fetch("https://fierce-falls-08266.herokuapp.com/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data))
          .catch(error => (console.log(error)));
      }, [control]);

      const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://fierce-falls-08266.herokuapp.com/orders/${id}`;
            fetch(url, {
             method: "DELETE",
            })
            .then((res) => res.json())
             .then((data) => {
             if (data.deletedCount) {
             setControl(!control);
             }
       })
        }
    };

    return (
        <div className="">
            <h2>Mange All Orders: {orders?.length}</h2>
            <div className='container'>
            <div className="row">
                <div className="col-md-12 col-sm-6 col-md-8 mx-auto">
            <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Package Name</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>visit Date</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          {orders?.map((pd, index) =>(
          <tbody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{pd?.place_name}</td>
              <td>{pd?.fullname}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              {(pd.price && !pd.paid) &&<td className='text-secondary fw-bold'>{pd?.status}</td>}
              {(pd.price && pd.paid) &&<td className='text-success fw-bold'>paid</td>}
              <button className='btn btn-danger bg-danger' onClick={() => handleDelete(pd?._id)}>Delete</button>
            </tr>
          </tbody>
          ))}
        </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllOrders;