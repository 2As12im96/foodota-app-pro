import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import useMealsLogic from "./Meals.logic";

function Meals() {
    const { chexkpointerData , loading , filteredData  , renderPageNumbers ,goToPrevPage , goToNextPage , currentItems , currentPage , totalPages , handleAddToCart } = useMealsLogic();
    return (
        <>
            <Navbar/>
            <section className="meals">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <div className="accordion">
                                <h3 className="pt-3 pb-3">Search By Food</h3>
                                <span className="line d-block w-100"></span>
                                {chexkpointerData}
                            </div>
                            <div className="advertisement mt-4 mb-5">
                                <h3 className="mt-2 mb-4">Advertisement</h3>
                                <img src="/image/BuffetFood.jpg" alt="advertisement" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-6">
                            <div className="meals-parent">
                                <div className="banner-img">
                                    <img src="/image/top-banner_.png" alt="banner" className="img-fluid w-100"/>
                                </div>
                                <div className="meals-items">
                                    <h2 className="mb-4 text-center">Meals Page</h2>
                                    <div className="row">
                                        {!loading && filteredData.length > 0 ? (
                                            currentItems.map((item) => (
                                                <div key={item._id} className="col-lg-4">
                                                    <div id={item._id} className="card">
                                                        <div className="card-body">
                                                            <div className="card-img w-100">
                                                                <img src={item.imageURL.url} alt={item.type} className='img-fluid'/>
                                                            </div>
                                                            <h5 className="card-title mt-3 mb-3">{item.title}</h5>
                                                            <p className="card-text">{item.discription}</p>
                                                            <span className="d-block sallary">£{item.cost}.00</span>
                                                            <button className='btn btn-warning' title="add to card" onClick={()=> handleAddToCart(item)}>add to card</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            ) : (
                                            !loading && filteredData.length === 0 ? (
                                                <div className="col-12"><p className='mt-5 text-center'>Not found products to present</p></div>
                                            ) : (
                                                <div className="col-12"><p className='mt-5 text-center'>Loading...</p></div>
                                            )
                                        )}
                                        {totalPages > 1 && (
                                            <nav aria-label="Page navigation example" className="mt-4">
                                                <ul className="pagination justify-content-center">
                                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                        <button className="page-link" onClick={goToPrevPage} disabled={currentPage === 1}>
                                                            prev
                                                        </button>
                                                    </li>
                                                    {renderPageNumbers()}
                                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                        <button className="page-link" onClick={goToNextPage} disabled={currentPage === totalPages}>
                                                            next
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>
                                        )}
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

export default Meals
