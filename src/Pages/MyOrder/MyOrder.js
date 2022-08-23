import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import Spinner from '../Shared/Spinner';
import  './MyOrder.css'

const MyOrder = () => {
const {user} = useAuth();
const [orders, setOrders] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isDeleted, setIsDeleted] = useState(false);

// get all the orders
 useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, [user?.email]);

  // delete a order
  const handelCancel = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-3",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                setIsDeleted(data);
                window.location.reload();
              }
            })
            .finally(() => {
              setIsDeleted(false);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${user?.email}`)
    //       .then((res) => res.json())
    //       .then((data) => setOrders(data));
    //   }, [user?.email]);
    // useEffect(() =>{
    //     const getOrder = async() =>{
    //         const email = user.email;
    //         const url = `http://localhost:5000/order/${email}`;
    //         const {data} = await axios.get(url, {
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('idToken')}`
    //             }
    //         });
    //         setOrders(data)
    //     }
    //     getOrder()
    // },[user?.email])
    return (
        <div className='order-section'>
            <div className="container">
            {orders.length === 0 && (
          <p class="fs-4 text-center d-block">You have no orders to view.</p>
            )}
            {orders?.map((pd, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{index + 1 }</th>
                <td>{pd?._id}
                <div>
                    <div><img src={pd?.details?.image} alt="" /></div>
                </div>
                </td>
                <td>{pd?.details?.Place_name}</td>
                <td>{pd?.details?.time}</td>
                <td>{pd?.details?.price}</td>
                <td><button
                className="btn btn-danger"
                onClick={() => handelCancel(pd?._id)}
              >
                Cancel
              </button></td>
                </tr>
            </tbody>
            </table>
            <div className="btn btn-success btn-lg paybtn">
               <NavLink to='/payment'>Process to Pay</NavLink>
            </div>
            </div>
          ))}

</div>
        </div>
    );
};

export default MyOrder;