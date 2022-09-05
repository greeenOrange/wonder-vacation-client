import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
import Rating from 'react-rating';
import Spinner from '../Shared/Spinner/Spinner';

const Packages = ({pd}) => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const data = [...packages]
    const sliceData = data.slice(0,6);

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://fierce-falls-08266.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data => {
            setPackages(data)
            setIsLoading(false)
        })
    },[]);
    
    return (
        <>
        <main>
        <div className="products-section my-4 container">
        <div className='products'>
            <div className="products-heading">
            <h2 className='mb-4 products-heading'>Popular Tour <span> Package</span></h2>
            <p>The results are in! Explore this year’s expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire.</p>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
            <Link className='btn btn-outline-danger px-5 py-2' to="/explore">Explore More</Link>
            </div>
            </div>
            <div className="row">
            
            {
                isLoading && <Spinner />
            }

            { sliceData?.map((pd, index) => (
                <div key={pd._id} className='col-md-4 my-3 col-sm-12'>
                <div className='products'>
                <img src={pd?.image} alt="" />
                </div>
                <div className="package-container">
                <div key={pd?._id} className="products-images">
                <p className='card-lavel'>
                    <span> {pd?.time}</span>
                </p>
                </div>
                <div className="products-details">
                    <h5>{pd?.name}</h5>
                    <div className='product Rating'>
                     <Rating
                    initialRating={pd?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                    ></Rating>
                    <h5><span>{pd?.reviews}</span>/ Reviews</h5>
                    </div>
                    <div className="products-booking-pricing">
                    <button className='btn btn-outline-danger me-2'><Link to={`/Packagebooking/${pd._id}`}>Book Now <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></button>
                    <div className='card-price'>
                    <span id='price-id'>From</span>
                    <span className='price-tag'>
                        {pd?.price}
                    </span>
                    Per Person
                </div>
                    </div>
                </div>
                </div>
                </div>
          ))}
            </div>
            </div>
        </main>
        </>
    );
};

export default Packages;