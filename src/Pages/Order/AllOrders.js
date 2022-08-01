import React, { useEffect, useState } from 'react';
import './AllOrders.css'

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data))
      }, [control]);

      const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/order/${id}`;
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
                <div className="col-md-8 col-sm-6 mx-auto">
            <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Proparty Name</th>
              <th>User Email</th>
              <th>Address</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          {orders?.map((pd, index) =>(
          <tbody key={index}>
            <tr>
              <th scope="row">1</th>
              <td>{pd?.data?.fullName}</td>
              <td>{pd?.data?.email}</td>
              <td>{pd?.address}</td>
              <td>{pd?.data?.status}</td>
              <button onClick={() => handleDelete(pd?._id)}>Delete</button>
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