import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Carousel from '../Home/carousel'

function About() {
  return (
    <>
        <Navbar/>
        <section className='about'>
            <div className="about-bg"></div>
            <div className="about-parent">
                <div className="about-title text-center rounded">
                    <h1>About Us</h1>
                </div>
                <div className="about-content position-relative">
                    <img src="/image/side-donut-1.png" alt="donuts" className='first-donuts'/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h2>Quality And Fresh</h2>
                                    <p>Learn into that problem translating our vision of having a market leading platfrom. Commitment data point high performance high performance</p>
                                    <ul className="custom-list">
                                        <li>
                                            <img decoding="async" src="/image/redmark.png" alt=""/>
                                            Use Friendly Management
                                        </li>
                                        <li>
                                            <img decoding="async" src="/image/redmark.png" alt=""/>
                                            Best Service Then Other
                                        </li>
                                        <li>
                                            <img decoding="async" src="/image/redmark.png" alt=""/>
                                            Use Experience Staff                                        
                                        </li>
                                    </ul>
                                    <Link to='#'>Discover Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-imgs">
                                    <div className="first-box-img d-flex">
                                        <div className="box-img w-50">
                                            <img src="/image/Rectangle-30901.png" alt="dounts" className='img-fluid rounded'/>
                                        </div>
                                        <div className="box-img w-50">
                                            <img src="/image/Rectangle-30902.png" alt="dounts" className='img-fluid rounded'/>
                                        </div>
                                    </div>
                                    <div className="last-box-img d-flex">
                                        <div className="box-img w-50">
                                            <img src="/image/Rectangle-30903.png" alt="dounts" className='img-fluid rounded'/>
                                        </div>
                                        <div className="box-img w-50">
                                            <img src="/image/Rectangle-30904.png" alt="dounts" className='img-fluid rounded'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ads-img d-flex align-items-center">
                            <div className="ads-box-img w-50">
                                <img src="/image/red.png" alt="ads" className='img-fluid'/>
                            </div>
                            <div className="ads-box-img w-50">
                                <img src="/image/orange.png" alt="ads" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <img src="/image/side-donut-2.png" alt="donuts" className='last-donuts'/>
                </div>
                <div className="about-delivery position-relative">
                    <img src="/image/side-donut-1.png" alt="donuts" className='first-donuts'/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="deliver-parent">
                                    <div className="first-deliver-items d-flex">
                                        <div className="deliver-item w-50">
                                            <h2>Service shows good taste.</h2>
                                        </div>
                                        <div className="deliver-item w-50 text-center">
                                            <div className="img-icon">
                                                <img src="/image/Frame-3.png" alt="icon" />
                                            </div>
                                            <div className="deliver-text">
                                                <h3>Free Delivery</h3>
                                                <p>Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="last-deliver-items d-flex">
                                        <div className="deliver-item w-50 text-center">
                                            <div className="img-icon">
                                                <img src="/image/Frame-2.png" alt="icon" />
                                            </div>
                                            <div className="deliver-text">
                                                <h3>Fast Service</h3>
                                                <p>Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu</p>
                                            </div>
                                        </div>
                                        <div className="deliver-item w-50 text-center">
                                            <div className="img-icon">
                                                <img src="/image/service-icon-1-1.png" alt="icon" />
                                            </div>
                                            <div className="deliver-text">
                                                <h3>Regular Discount</h3>
                                                <p>Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="deliver-img">
                                    <img src="/image/cont.png" alt="delivery" className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/image/side-donut-2.png" alt="donuts" className='last-donuts'/>
                </div>
                <div className='carousel-section'>
                    <div className="container">
                        <span className='title d-block text-center'>Satisfied Clients</span>
                        <h2 className='text-center mb-5'>what our clients say</h2>
                        <div className="row">
                        <div className="col-lg-6">
                            <Carousel/>
                        </div>
                        <div className="col-lg-6">
                            <div className="carousel-section-img">
                            <img src="/image/CUST-IMG-1.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="container">
                        <div className="title text-center">
                            <p>Team member</p>
                            <h2>Our Best Team</h2>
                        </div>
                        <div className="parent-card d-flex align-items-center">
                            <div className="child-card">
                                <div className="child-img">
                                    <img src="/image/portrait-of-a-smiling-male-1.png" alt="chief" className='img-fluid'/>
                                </div>
                                <div className="child-info">
                                    <h3>Alizeh Anderson</h3>
                                    <p>Senior Chef</p>
                                </div>
                            </div>
                            <div className="child-card">
                                <div className="child-img">
                                    <img src="/image/portrait-of-a-smiling-male-1-1.png" alt="chief" className='img-fluid'/>
                                </div>
                                <div className="child-info">
                                    <h3>Alizeh Anderson</h3>
                                    <p>Senior Chef</p>
                                </div>
                            </div>
                            <div className="child-card">
                                <div className="child-img">
                                    <img src="/image/portrait-of-a-smiling-male-1-2.png" alt="chief" className='img-fluid'/>
                                </div>
                                <div className="child-info">
                                    <h3>Alizeh Anderson</h3>
                                    <p>Senior Chef</p>
                                </div>
                            </div>
                            <div className="child-card">
                                <div className="child-img">
                                    <img src="/image/img-.png" alt="chief" className='img-fluid'/>
                                </div>
                                <div className="child-info">
                                    <h3>Alizeh Anderson</h3>
                                    <p>Senior Chef</p>
                                </div>
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

export default About
