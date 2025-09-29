import { faFacebookF, faGooglePlusG, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Footer() {
    /*--------------------------------------*/
    // scrollToTop button
    const [scrollTop , setScrollTop] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            window.scrollY > 250 ? setScrollTop(true) : setScrollTop(false);
        };
        window.addEventListener('scroll' , handleScroll);
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , []);
    const ScrollToTopButton = ()=> {
        window.scrollTo({
            top: 0 ,
            behavior:'smooth',
        });
    }
    /*--------------------------------------*/
    return (
        <>
            <div className= {scrollTop ? 'scrollToTop active d-flex justify-content-center align-items-center rounded' : 'scrollToTop d-flex justify-content-center align-items-center rounded'} onClick={ScrollToTopButton}>
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
            <section className='footer-links'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="links">
                                <div className="links-img mb-3">
                                    <img src="/image/logo.svg" alt="foodota" className='img-fluid'/>
                                </div>
                                <ul className='list-unstyled'>
                                    <li className='mb-2'>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</li>
                                    <li className='mb-2'><strong>Phone:</strong> +92300-400-2333</li>
                                    <li className='mb-2'><strong>Email:</strong> restaurant@gmail.com</li>
                                    <li className='mb-2'>
                                        <span className='facebook'><FontAwesomeIcon icon={faFacebookF}/></span>
                                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                                        <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                        <span><FontAwesomeIcon icon={faYoutube} /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="links mt-4">
                                <h4>Our Service</h4>
                                <ul>
                                    <li><Link to='/'>All Vendors</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/'>Home 1</Link></li>
                                    <li><Link to='/'>Home 2</Link></li>
                                    <li><Link to='/'>Main Home</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="links mt-4">
                                <h4>Latest News</h4>
                                <ul>
                                    <li className='mt-3'>
                                        <span className='d-flex'>
                                            <img src="/image/post-5-150x150.jpg" alt="" />
                                            <span className='img-link'>
                                                <Link to='/'>Grilled Chicken & kabab with tomato Sauce</Link>
                                                <span>March 19, 2021</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li className='mt-4'>
                                        <span className='d-flex'>
                                            <img src="/image/post-7-150x150.jpg" alt="" />
                                            <span className='img-link'>
                                                <Link to='/'>Hot & Air Fryer Creamy Chicken Bolls</Link>
                                                <span>March 19, 2021</span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="links mt-4">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><Link to='/'>All Vendors</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/'>Home 1</Link></li>
                                    <li><Link to='/'>Home 2</Link></li>
                                    <li><Link to='/'>Home 2</Link></li>
                                    <li><Link to='#'>Pricing Plan</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer d-flex justify-content-center align-items-center p-3">
                <p className='text-center'>Copyright 2025 © Theme Created By <strong>Asim Badawi</strong> All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
