import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const PackageBookingSkelition = () => {
    return (
        <div className='container my-4'>
            <Skeleton />
        <div className="row">
              <div className="col-md-8">
              <Skeleton />
              <div className="packages-details my-4">
                        <img src="..." alt="" className='w-100 mt-3' />
                        <p><Skeleton /></p>
                        <h4><Skeleton /><img src="https://img.icons8.com/color/48/000000/marker--v1.png"/></h4>
                        <div className="package-discription">
                        <Skeleton />
                        <h3></h3>
                        <p></p>
                        </div>
                    </div>
            </div>
        </div>            
        </div>
    );
};

export default PackageBookingSkelition;