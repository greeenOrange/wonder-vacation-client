import React from 'react';
import Swal from 'sweetalert2';

const UserRow = ({user}) => {
    const {email, role, displayName} = user;
    const makeAdmin = () =>{
        fetch(`https://wonder-vacation-server.up.railway.app/users/admin/${email}`,{
            method: 'PUT',
        })
        .then(res => {
            if(res.status === 403){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed TO set as Admin'
                  })
            }
           return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Success to set as Admin',
                    'success'
                  )
                  window.location.reload();
            }
            
        })
    }
    
    return (
        <>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-success'>Make Admin</button>}
            </td>
        </>
    );
};

export default UserRow;