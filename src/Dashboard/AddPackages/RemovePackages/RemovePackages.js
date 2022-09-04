import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const RemovePackages = () => {
    const [packages, setPackages] = useState([]);
    const [isDeleted, setIsDeleted] = useState(true);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:5000/packages")
          .then((res) => res.json())
          .then((data) => {
            setPackages(data)
            console.log(data);
            setIsLoading(false)
          })
      }, [isDeleted]);

    //   const handleDelete = (id) =>{
    //     axios.delete(`http://localhost:5000/packages/${id}`)
    //     .then(res => res.json())
    //      .then((data) => {
    //             if (data.deletedCount) {
    //             setControl(!control);
    //             }
    //       })}

        // const handleDelete = id => {
        //     setIsLoading(true)
        //     const url = `http://localhost:5000/packages/${id}`;
        //     fetch(url, {
        //     method: 'DELETE'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //     if (data.deletedCount) {
        //     setControl(!control);
        //     setIsLoading(false)

        //     }
        //     })
        //     }
            // delete a order
    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You Want to Delete it!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      })
  
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/packages/${id}`, {
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

    return (
        <div className='remove-packages-section'>
            <div className="container">
        <h2>Mange All Packages: {packages?.length}</h2>
        


<table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Place</th>
              <th>image</th>
              <th>Price</th>
              <th>time</th>
              <th>action</th>
            </tr>
          </thead>
          {
            packages?.map((pd, index)=>(
      <tbody key={index}>
        
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{pd?.place_name} <span>{pd?.Country}</span></td>
        <td><img class="img-thumbnail" src={pd?.image} alt="" /></td>
        <td>{pd?.price}</td>
        <td>{pd?.time}</td>
        <button type="button" class="btn btn-danger bg-danger" onClick={() => handleDelete(pd?._id)}>Delete</button>            </tr>
          </tbody>
    ))
}
        </table>
            </div>
        </div>
    );
};

export default RemovePackages;