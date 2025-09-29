import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import useBlogLogic from './Blogs.logic'

function Blogs() {
    const {blogsUI} = useBlogLogic()
    return (
        <>
            <Navbar/>
            <section className="blogs-bg"></section>
            <section className='blogs'>
                <div className="container">
                   <div className="blogs-content">
                        <div className="blogs-title w-100 d-flex justify-content-center align-items-center">
                            <h2 className='text-center'>Latest News & Trends</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="blogs-cards">
                                    <div className="row">
                                        {blogsUI}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="blogs-ads">
                                    <Link to='#'><img src="/image/sd.png" alt="ads" className='img-fluid' /></Link>
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

export default Blogs
