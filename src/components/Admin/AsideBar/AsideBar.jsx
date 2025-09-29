import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightFromBracket, faFileInvoiceDollar, faHouseChimney, faShop, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

function AsideBar({active , setActive}) {
    const closeSideBar = ()=> {
        setActive(false);
    }
    return (
        <>
            <div className={active ? "navigation active" : "navigation"}>
                <span className="nav-img d-flex justify-content-between align-items-center">
                    <span className="logo d-flex align-items-center">
                        <FontAwesomeIcon icon={faApple} title='Fodoota'/>
                        <img src="/image/logo.svg" alt="Fodoota" title='Fodoota' />
                    </span>
                    <span className="exit" onClick={()=> closeSideBar()}>
                        <FontAwesomeIcon icon={faXmark} title='Exit'/>
                    </span>
                </span>
                <ul>
                    <li>
                        <NavLink to='/dashboard' title='Home'>
                            <FontAwesomeIcon icon={faHouseChimney} />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-products' title='Products'>
                            <FontAwesomeIcon icon={faShop} />
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-users' title='Users'>
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-orders' title='Orders'>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signout' title='Sign out'>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <span>Sign out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AsideBar
