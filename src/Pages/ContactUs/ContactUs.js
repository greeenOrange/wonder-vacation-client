import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contactus-section'>
            <div className="container">
                <div className="row">
                        <h2 className='text-center d-block'>For Questions And Inquiries</h2>
                    <div className="col">
                        <p className='text-center d-block'>If you have any question or any business inquiries, fill in the form below or feel free to contact directly via <span className='text-primary fw-bold'>email</span> any time.</p>
                        <p className='text-center d-block'>Or if you want to contact us about a work opportunity, here are some more information about BucketListly Blog that might be of interest: <span className='text-primary fw-bold'>Work With Us</span>.</p>
                        <div class="mt-5 contact-form">
  <label for="userName" class="">Name</label>
  <input type="email" class="form-control" id="userName" placeholder="name"/>
  <label for="userEmail" class="">Email</label>
  <input type="email" class="form-control" id="userEmail" placeholder="name@example.com"/>
<div class="my-3">
  <label for="exampleFormControlTextarea1">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<input className='btn btn-dark border-0 mb-5' type="submit" value="Submit" />
</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;