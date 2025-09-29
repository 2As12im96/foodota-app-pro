import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Contact() {
    return (
        <>
            <Navbar/>
            <section className='contact about'>
                <div className="about-bg"></div>
                <div className="about-parent contact-parent">
                    <div className="about-title text-center rounded">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="container">
                        <div className="contact-info d-flex align-items-center justify-content-between flex-wrap">
                            <div className="item d-flex align-items-center">
                                <div className="icon">
                                    <img src="/image/gmail.png" alt="gmail" />
                                </div>
                                <div className="text">
                                    <h6>Email Address</h6>
                                    <p>info@foodotagexample.com</p>
                                </div>
                            </div>
                            <div className="item d-flex align-items-center">
                                <div className="icon">
                                    <img src="/image/phone.png" alt="phone" />
                                </div>
                                <div className="text">
                                    <h6>Phone Number</h6>
                                    <p>+786-555-012 or +856-457-1</p>
                                </div>
                            </div>
                            <div className="item d-flex align-items-center">
                                <div className="icon">
                                    <img src="/image/location.png" alt="location" />
                                </div>
                                <div className="text">
                                    <h6>Location</h6>
                                    <p>38 Sardinella, 2nd Eden walk</p>
                                </div>
                            </div>
                            <div className="item d-flex align-items-center">
                                <div className="icon">
                                    <img src="/image/timing.png" alt="timing" />
                                </div>
                                <div className="text">
                                    <h6>Timing</h6>
                                    <p>Sunday-Fri: 7 AM – 6 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <h2>Get in touch</h2>
                                    <p>Feel free to reach out if you need any information or assistance. We’re here to help and answer any questions you may have!</p>
                                    <form action="">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Your Name' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder='Your Email' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Subject' />
                                        </div>
                                        <div className="mb-3">
                                            <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder='Your Message'></textarea>
                                        </div>
                                        <button type='submit' className='btn btn-primary'>Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-img">
                                    <img src="/image/cont.png" alt="photo" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Contact
