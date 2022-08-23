import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() =>{
        console.log('user insite',  user);
        // const email = user?.email.email;
        // const currentUser = {email: email};
        // if(email){
        //     fetch(`http://localhost:5000/order/?${email}`, {
        //         method: 'PUT',
        //         headers:{
        //             'content-type': 'application/json'
        //         },
        //         body:JSON.stringify(currentUser)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('Data inside UseToken',data);
        //         const accessToken = data.token;
        //         localStorage.setItem('accessToken', accessToken)
        //         setToken(accessToken)
        //     })
        // }
    },[user])
    return (
        <div>
            
        </div>
    );
};

export default useToken;