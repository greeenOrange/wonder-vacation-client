import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Rating from 'react-rating';
import 'react-loading-skeleton/dist/skeleton.css'

const PackagesSkelition = () => {
    return (
        <main>
        <div className="products-section my-4 container">
        <div className='products'>
            <Skeleton />
            </div>
            <div className="row">
                <div className='col-md-4 my-3 col-sm-12'>
                <Skeleton />
                <div className='products'>
                <Skeleton />
                <img src="..." alt="" loading="lazy" />
                </div>
                <div className="package-container">
                <div className="products-images">
                <p className='card-lavel'>
                    <span></span>
                </p>
                </div>
                <div className="products-details">
                <Skeleton />
                    <h5><Skeleton /></h5>
                    <div className='product Rating'>
                     <Rating
                     emptySymbol="far fa-star icon-color"
                     fullSymbol="fas fa-star icon-color"
                     >
                     <Skeleton />
                     </Rating>
                    <h5><Skeleton /><span><Skeleton /></span><Skeleton /></h5>
                    </div>
                    <div className="products-booking-pricing">
                    <button className='btn btn-outline-danger me-2'><a><Skeleton /> <span><Skeleton /></span></a></button>
                    <div className='card-price'>
                    <span id='price-id'><Skeleton /></span>
                    <span className='price-tag'>
                    <Skeleton />
                    </span>
                </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    );
};

export default PackagesSkelition;