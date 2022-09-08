import React, { useState } from 'react';
import { useEffect } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    useEffect(() =>{
        const email = user?.email;
        if(email){
            fetch(`https://fierce-falls-08266.herokuapp.com/admin/${email}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
            .catch(error => (console.log(error)));
        }
    }, [user])
    return [admin];
};

export default useAdmin;