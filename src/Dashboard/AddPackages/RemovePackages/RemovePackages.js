import React, { useEffect, useState } from 'react';

const RemovePackages = () => {
    const [packages, setPackages] = useState([]);
    const [control, setControl] = useState(true);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        fetch("https://fierce-falls-08266.herokuapp.com/packages")
          .then((res) => res.json())
          .then((data) => {
            setPackages(data)
            setIsLoading(false)
          })
      }, [control]);

    //   const handleDelete = (id) =>{
    //     axios.delete(`https://fierce-falls-08266.herokuapp.com/packages/${id}`)
    //     .then(res => res.json())
    //      .then((data) => {
    //             if (data.deletedCount) {
    //             setControl(!control);
    //             }
    //       })}

        const handleDelete = id => {
            setIsLoading(true)
            const url = `https://fierce-falls-08266.herokuapp.com/packages/${id}`;
            fetch(url, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
            if (data.deletedCount) {
            setControl(!control);
            setIsLoading(false)

            }
            })
            }

    return (
        <div className='remove-packages-section'>
            <div className="container">
        <h2>Mange All Packages: {packages?.length}</h2>
        


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
          {
            packages?.map((pd, index)=>(
<tbody key={index}>
        
            <tr>
              <th scope="row">1</th>
              <td>{pd?.data?.fullName}</td>
              <td>{pd?.data?.email}</td>
              <td>{pd?.address}</td>
              <td>{pd?.data?.status}</td>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={() => handleDelete(pd?._id)}>Delete</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
      </div>
    </div>
  </div>
</div>
            </tr>
          </tbody>
    ))
}
        </table>
            </div>
        </div>
    );
};

export default RemovePackages;