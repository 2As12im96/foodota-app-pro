import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogsData } from './BlogsData';

function useBlogLogic() {
    const [blog , setBlog] = useState();

    const handleClickBlog = (id) => {
        const data = blogsData.find(item => item.id === id);
        setBlog(data); 
    };

    useEffect(() => {
        if (blog) {
            localStorage.setItem('Blog', JSON.stringify(blog));
        }
    }, [blog]);
    const blogsUI = blogsData.map((blog)=> {
        return(
            <div key={blog.id} className="col-lg-6 col-md-6">
                <Link to={`${blog.id}`} onClick={()=> handleClickBlog(`${blog.id}`)}>
                    <div id={blog.id} className="card">
                        <div className="card-img">
                            <img src={blog.image} alt="" className='img-fluid'/>
                        </div>
                        <div className="card-info">
                            <span>{blog.name}</span>
                            <h3>{blog.title}</h3>
                            <p>{blog.script}</p>
                            <div className="card-admin-img d-flex align-items-center">
                                <div className="admin-img">
                                    <img src="/image/334c4a4c42fdb79d7ebc3e73b517e6f8.jpg" alt=""  className='img-fluid'/>
                                </div>
                                <div className="admin-text">
                                    <strong>Admin</strong>
                                    <p>March 22, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
    return {
        blogsUI,
        blog
    }
}

export default useBlogLogic
