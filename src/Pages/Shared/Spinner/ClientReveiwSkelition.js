import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Rating from 'react-rating';

const ClientReveiwSkelition = () => {
    return (
        <div className="row">
            <div className="col-md-4">
            <div className='review-card card'>
                <Skeleton />
                <div className="reviewer-review">
                <Skeleton />
                <div className="reviewer-img">
                <Skeleton />
                    <img src="...." alt="" loading="lazy" />
                </div>
                </div>
                <div className="review-details px-2">
                <Skeleton />
                    <p><Skeleton /></p>
                    <div className="review-rating">
                    <Rating
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        fractions={2}
                        ><Skeleton /></Rating>
                    <Skeleton />
                    <div className="reviewer">
                    <Skeleton />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                    </div>
                    <p></p>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className='review-card card'>
                <Skeleton />
                <div className="reviewer-review">
                <Skeleton />
                <div className="reviewer-img">
                <Skeleton />
                    <img src="...." alt="" loading="lazy" />
                </div>
                </div>
                <div className="review-details px-2">
                <Skeleton />
                    <p><Skeleton /></p>
                    <div className="review-rating">
                    <Rating
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        fractions={2}
                        ><Skeleton /></Rating>
                    <Skeleton />
                    <div className="reviewer">
                    <Skeleton />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                    </div>
                    <p></p>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className='review-card card'>
                <Skeleton />
                <div className="reviewer-review">
                <Skeleton />
                <div className="reviewer-img">
                <Skeleton />
                    <img src="...." alt="" loading="lazy" />
                </div>
                </div>
                <div className="review-details px-2">
                <Skeleton />
                    <p><Skeleton /></p>
                    <div className="review-rating">
                    <Rating
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        fractions={2}
                        ><Skeleton /></Rating>
                    <Skeleton />
                    <div className="reviewer">
                    <Skeleton />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                    </div>
                    <p></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ClientReveiwSkelition;