import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../Shared/Spinner/Spinner';
import Footer from '../../Footer/Footer';
import './Explore.css'
const Explore = () => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://wonder-vation-server.onrender.com/packages')
        .then(res=>res.json())
        .then(data => {
            setPackages(data)
            setIsLoading(false)
        })
        .catch(error => (console.log(error)));
    },[])
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
            <Link className='btn btn-outline-danger px-5 py-2' to="/">Back Home</Link>
            </div>
            </div>
            <div className="row">
            
            {
                isLoading && <Spinner></Spinner>
            }

            { packages?.map((pd, index) => (
                <div key={pd._id} className='col-md-4 my-3'>
                <div className='products-images'>
                <img src={pd?.image} alt="" loading="lazy" />
                </div>
                <div className="package-container">
                <div className="products-card">
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
                    <div className='card-price'>
                    <span id='price-id'>From</span>
                    <span className='price-tag'>
                        {pd?.price}
                    </span>
                    Per Person
                </div>
                    <button className='btn btn-outline-danger me-2'><Link to={`/Packagebooking/${pd._id}`}>Book Now <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></button>
                    </div>
                </div>
                </div>
                </div>
          ))}
            </div>
            </div>
            <Footer />
        </main>
        </>
    );
};

export default Explore;