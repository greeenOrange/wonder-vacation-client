import React from 'react';
import Footer from '../Footer/Footer';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contactus-section'>
            <div className="container">
                <div className="row my-5">
                        <h2 className='text-center text-secondary d-block'>For Questions And Inquiries</h2>
                    <div className="col">
                        <p className='text-center d-block'>If you have any question or any business inquiries, fill in the form below or feel free to contact directly via <span className='text-primary fw-bold'>email</span> any time.</p>
                        <p className='text-center d-block'>Or if you want to contact us about a work opportunity<span className='d-block'></span> Here are some more information about BucketListly Blog that might be of interest: <span className='text-primary fw-bold'>Work With Us</span>.</p>
                        <div className="mt-5 contact-form">
  <label for="userName" className="">Name</label>
  <input type="email" className="form-control" id="userName" placeholder="name"/>
  <label for="userEmail" className="">Email</label>
  <input type="email" className="form-control" id="userEmail" placeholder="name@example.com"/>
<div className="my-3">
  <label for="exampleFormControlTextarea1">Massage</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<input className='btn btn-dark border-0 mb-5' type="submit" value="Submit" />
</div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;