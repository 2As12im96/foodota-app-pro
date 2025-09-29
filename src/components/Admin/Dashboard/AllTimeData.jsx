import useDashboardLogic from "./Dashboard.logic";

function AllTimeData() {
    const { items , users , orders , earn } = useDashboardLogic();
    return (
        <>
            <div className="latest_orders rounded">
                <h5>All Time</h5>
                <span className="member d-flex justify-content-between align-items-center">
                    <span>Users</span>
                    <span>{users}</span>
                </span>
                <span className="member ch_color d-flex justify-content-between align-items-center">
                    <span>products</span>
                    <span>{items.data.length}</span>
                </span>
                <span className="member d-flex justify-content-between align-items-center">
                    <span>Orders</span>
                    <span>{orders}</span>
                </span>
                <span className="member ch_color d-flex justify-content-between align-items-center">
                    <span>Earnings</span>
                    <span>${earn}</span>
                </span>
            </div>    
        </>
    )
}

export default AllTimeData
