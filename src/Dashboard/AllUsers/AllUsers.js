import { useState, useEffect } from 'react';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import UserRow from '../MakeAdmin/UserRow';
import './AllUsers.css'

const AllUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [admin, SetAdmin] = useState([])
    
    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            SetAdmin(data)
            setIsLoading(false)
        })
    }, [])
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