import { faCartShopping, faEye , faMoneyBills, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import SalesChart from "./Charts";
import AsideBar from "../AsideBar/AsideBar";
import NavAdmin from "../NavAdmin/NavAdmin";
import AllTimeData from "./AllTimeData";
import useDashboardLogic from "./Dashboard.logic";

function Dashboard() {
    const [active, setActive] = useState(false);
    const { items , users , orders , earn } = useDashboardLogic();
    return (
        <>
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className={active ? "col-lg-1" : "col-lg-3"}>
                        <AsideBar active={active} setActive={setActive}/>
                    </div>
                    <div className={active ? "col-lg-11" : "col-lg-9"}>
                        <section className="dashboard-content">
                            <NavAdmin active={active} setActive={setActive}/>
                            <div className="overview mt-5">
                                <div className="parent-cards d-flex justify-content-between align-items-center">
                                    <div className={active ? "container-fluid" : "container"}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="child-card">
                                                    <div className="card-info d-flex justify-content-between align-items-center">
                                                        <div className="card-text">
                                                            <h4>1504</h4>
                                                            <p>Daily view</p>
                                                        </div>
                                                        <div className="card-icon d-flex justify-content-center align-items-center rounded-circle">
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="child-card">
                                                    <div className="card-info d-flex justify-content-between align-items-center">
                                                        <div className="card-text">
                                                            <h4>{orders}</h4>
                                                            <p>Total Sales</p>
                                                        </div>
                                                        <div className="card-icon d-flex justify-content-center align-items-center rounded-circle">
                                                            <FontAwesomeIcon icon={faCartShopping} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="child-card">
                                                    <div className="card-info d-flex justify-content-between align-items-center">
                                                        <div className="card-text">
                                                            <h4>{users}</h4>
                                                            <p>User</p>
                                                        </div>
                                                        <div className="card-icon d-flex justify-content-center align-items-center rounded-circle">
                                                            <FontAwesomeIcon icon={faUsers} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="child-card">
                                                    <div className="card-info d-flex justify-content-between align-items-center">
                                                        <div className="card-text">
                                                            <h4>${earn}</h4>
                                                            <p>Earning</p>
                                                        </div>
                                                        <div className="card-icon d-flex justify-content-center align-items-center rounded-circle">
                                                            <FontAwesomeIcon icon={faMoneyBills} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="charts mt-5">
                                    <div className={active ? "container-fluid" : "container"}>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-12">
                                                <SalesChart/>
                                            </div>
                                            <div className="col-lg-4 col-md-12">
                                                <AllTimeData/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dashboard
