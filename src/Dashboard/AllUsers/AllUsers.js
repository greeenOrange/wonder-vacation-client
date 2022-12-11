import { useState, useEffect } from 'react';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import UserRow from '../MakeAdmin/UserRow';
import './AllUsers.css'

const AllUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [admin, SetAdmin] = useState([]);
    const [controlUser, setControlUser] = useState(false)
    
    useEffect(() =>{
        fetch('https://wonder-vacation-server.up.railway.app/users')
        .then(res => res.json())
        .then(data => {
            SetAdmin(data)
            setIsLoading(false)
        })
        .catch(error => (console.log(error)));
    }, [controlUser])
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://wonder-vacation-server.up.railway.app/users/${id}`;
            fetch(url, {
             method: "DELETE",
            })
            .then((res) => res.json())
             .then((data) => {
             if (data.deletedCount) {
                setControlUser(!controlUser);
             }
       })
        }
    }
    return (
        <div className='alluser-section'>
            <div className="container">
                <div className="row">
                {
                isLoading && <Spinner></Spinner>
            }
                    
                    <div className="col-md-8 mx-auto">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        admin?.map((pd, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                        <UserRow
                        key={index}
                        user={pd}
                        >
                        </UserRow>
                        <td><button className='btn btn-danger' onClick={()=>handleDelete(pd._id)}>Remove User</button></td>
                        </tr>
                        
                    
                        )) }
                        </tbody>
                    </table>
                        </div>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default AllUsers;