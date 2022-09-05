import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const OrdersSkelition = () => {
    return (
      <div className="col-md-12 col-lg-6 ">
        <Skeleton />
      <div className='order-wrapper shadow-sm p-3 mb-5 bg-body rounded'>
      <Skeleton />
      <div className='order-card'>
      <Skeleton />
      <div className='order-image'>
      <Skeleton />
      <img src='...' className="card-img-top" alt="..." />
      </div>
      <div className="order-card-body">
      <Skeleton />
        <h3 className="fs-6"><Skeleton /></h3>
        <h5 className='fs-6'><Skeleton /><span className='order-price'></span> <span></span></h5>
        <h5 className='fs-6'><Skeleton /></h5>
        <h6 className='fs-6'><Skeleton /></h6>
      </div>
      </div>
      <div className='order-button'>
      <Skeleton />
      <button
          className="btn btn-danger"
        >

        </button>
      <div className="btn btn-success paybtn d-block">
      </div>
      </div>
      </div>
      </div>
            
    );
};

export default OrdersSkelition;