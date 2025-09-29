import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavAdmin({active , setActive}) {
    const toggleClass = () => {
        setActive(!active);
    }
    return (
        <>
            <nav>
                <div className="nav-content">
                    <span className="icon" onClick={()=> toggleClass()}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <form action="">
                        <span className="search d-flex justify-content-between align-items-center rounded-pill">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text" placeholder="Search here..."  className="form-control"/>
                        </span>
                    </form>
                    <div className="user d-flex align-items-center rounded-circle">
                        <img src="/image/team1.png" alt="" className="img-fluid" title='User Name'/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavAdmin
