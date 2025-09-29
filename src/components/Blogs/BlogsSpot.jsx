import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const BlogsSpot = () => {
    const blog = JSON.parse(localStorage.getItem('Blog'));

    return (
        <>
            <Navbar/>
            <section className='blog-spot'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div id={blog.id} className="blog-info">
                                <span className='name'>{blog.name}</span>
                                <h1 className='mt-3 mb-3'>{blog.title}</h1>
                                <span className='blog-icons d-flex align-items-center'>
                                    <span className='icon-box'>
                                        <span className='icon-info'>
                                            <FontAwesomeIcon icon={faCalendar} />
                                        </span>
                                        <span className='icon-text'>March 22, 2021</span>
                                    </span>
                                    <span className='icon-box'>
                                        <span className='icon-info'>
                                            <FontAwesomeIcon icon={faComment} />
                                        </span>
                                        <span className='icon-text'>No Comments</span>
                                    </span>
                                </span>
                                <div className="blog-img w-100">
                                    <img src={blog.image} alt="" className='img-fluid'/>
                                </div>
                                <div className="blog-text">
                                    <div className="first-text">
                                        <p>{blog.discription[0]}</p>
                                    </div>
                                    <div className="second-text">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                        <p>{blog.discription[1]}</p>
                                    </div>
                                    <div className="third-text">
                                        <p>{blog.discription[2]}</p>
                                    </div>
                                </div>
                                <div className="blog-form">
                                    <h3>Leave Your Comment</h3>
                                    <form action="">
                                        <span className='d-flex justify-contnet-between align-items-center w-100 input'>
                                            <span className='d-block w-50 pe-2'>
                                                <label htmlFor="Name">Your Name<span>*</span></label>
                                                <input type="text" id='Name' className='form-control'/>
                                            </span>
                                            <span className='d-block w-50 ps-2'>
                                                <label htmlFor="Email">Your Email<span>*</span></label>
                                                <input type="email" id='Email' className='form-control'/>
                                            </span>
                                        </span>
                                        <span className='d-block w-100 input'>
                                            <label htmlFor="Number">Your Number<span>*</span></label>
                                            <input type="text" id='Number' className='form-control'/>
                                        </span>
                                        <span className='d-block w-100 input'>
                                            <label htmlFor="comment">Your Comment</label>
                                            <textarea name="" id="comment" className='form-control'></textarea>
                                        </span>
                                        <span>
                                            <input type="submit" value='Post Comment' />
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="blogs-ads w-100">
                                <Link to='#'><img src="/image/sd.png" alt="ads" className='img-fluid w-100' /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );    
};

export default BlogsSpot;