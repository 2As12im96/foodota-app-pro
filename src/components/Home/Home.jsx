import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import Carousel from './carousel';
import useHomeLogic from './Home.logic';
import SlideImg from './Slide';

function Home() {
  const { getFoodMenu , getPopularRestaurants , getDealFoodData , getPizzaDealsData , getMailsDataContent , getTeamMembers , getTipsTricks} = useHomeLogic();
  return (
    <>
        <Navbar/>
        <section className='bg-img'>
          <div className="container">
            <div className="bg_info">
                <div className="bg_text">
                    <img src="/image/qwelcome_.png" alt="delivery service"  className='img-fluid'/>
                    <h1>Order Healthy and Fresh Food Any Time</h1>
                    <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                </div>
                <div className="bg_brands">
                  <p>Popular Restaurant</p>
                  <ul className='brands d-flex align-items-center'>
                    <li><img src="/image/brand-1.jpg" alt="brand-1" className='img-fluid'/></li>
                    <li><img src="/image/brand-2.jpg" alt="brand-2" className='img-fluid'/></li>
                    <li><img src="/image/brand-3.jpg" alt="brand-3" className='img-fluid'/></li>
                    <li><img src="/image/brand-4.jpg" alt="brand-4" className='img-fluid'/></li>
                    <li><img src="/image/brand-5.jpg" alt="brand-5" className='img-fluid'/></li>
                    <li><img src="/image/brand-6.jpg" alt="brand-6" className='img-fluid'/></li>
                    <li><img src="/image/brand-7.jpg" alt="brand-7" className='img-fluid'/></li>
                  </ul>
                </div>
            </div>
          </div>
        </section>
        <section className="home">
          <div className="container">
              <div className="menu  mt-5 mb-5">
                  <span className='d-block text-center'>Top Food</span>
                  <h2 className='text-center mt-3 mb-5'>Menu</h2>
                  <div className="row">
                    {getFoodMenu}
                  </div>
              </div>
              <div className="papular mt-5 mb-5">
                  <span className='title-text d-block text-center'>Delicious Food in</span>
                  <h2 className='title-heading text-center mt-3 mb-5'>Papular Restaurant</h2>
                  <div className="row">
                    {getPopularRestaurants}
                  </div>
              </div>
              <div className="deal">
                <span className='title-text d-block text-center'>Super Delicious</span>
                <h2 className='title-heading text-center mt-3 mb-5'>Super Delicious Deal</h2>
                <div className="row">
                    {getDealFoodData}
                </div>
              </div>
          </div>
        </section>
        <section className="d-flex align-items-center bg-burger">
          <div className="container">
            <div className="burger_info w-50">
              <span>Tasty Burger</span>
              <h2>explox the best burger place near you</h2>
              <strong>Largest Business Restaurant Food Theme in the World.</strong>
              <p>Make Your Own Educational Institute listing website including academies schools pre schools certifications and many more...</p>
              <button className='btn btn-warning'>Read More</button>
              <button className='btn btn-dark ms-3'>Search Now</button>
            </div>
          </div>
        </section>
        <section className='Hunger mt-2 mb-2'>
          <span className='d-block text-center'>Hunger station</span>
          <h2 className='text-center mt-3'>Super Pizza Deals</h2>
          <div className='bg-pizza'>
            <div className="container">
              <div className="row">
                {getPizzaDealsData}
              </div>
            </div>
          </div>
        </section>
        <section className='mails'>
          <div className="container">
           <div className="mails-info">
              <h5 className='text-center'>How It Works</h5>
              <div className="row">
                {getMailsDataContent}
              </div>
           </div>
          </div>
        </section>
        <section className='pizza_delivery'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="pizza-delivery-info">
                  <span>Pizza Delivery</span>
                  <h2>Get Started Today!</h2>
                  <strong>Everything you need to build an amazing food restaurant responsive website.</strong>
                  <p className='delivery-text'>Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
                  <div className="deliver-text d-flex justify-content-between align-items-center">
                    <div className="food">
                      <div className="food-img">
                        <img src="/image/earning.png" alt="earning" className='img-fluid' />
                      </div>
                      <div className="food-info">
                        <h4>Food Order</h4>
                        <p>Food is the necessity of life. It provides nutrition, sustenance growth to human body. Food can be classified.</p>
                      </div>
                    </div>
                    <div className="promote">
                      <div className="promote-img">
                        <img src="/image/promotion.png" alt="promotion" className='img-fluid' />
                      </div>
                      <div className="promote-info">
                        <h4>Promote Restaurant</h4>
                        <p>Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="pizza-delivery-img w-100 d-flex justify-content-center align-items-center">
                  <img src="/image/ggfg-min.jpg" alt="deliver-bg"  className='rounded-circle'/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='carousel-section'>
          <div className="container">
            <span className='title d-block text-center'>Satisfied Clients</span>
            <h2 className='text-center mb-5'>what our clients say</h2>
            <div className="row">
              <div className="col-lg-6">
                <Carousel/>
              </div>
              <div className="col-lg-6">
                <div className="carousel-section-img">
                  <img src="/image/45.png" className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='team mt-5 mb-5'>
          <div className="container">
            <span className='d-block text-center'>Team Members</span>
            <h2 className='text-center mt-3 mb-5'>Meet Our Best Team</h2>
            <div className="row">
              {getTeamMembers}
            </div>
          </div>
        </section>
        <section className='delivery'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="delivery-info">
                  <span>Dine In or Take Away</span>
                  <h2>Get Your Order 24/7 Right At Your Doorsteps</h2>
                  <p className='delivery-text'>Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes</p>
                  <div className="delivery-btn d-flex align-items-center mt-4 mb-3">
                    <button className='btn btn-warning'>Order Now</button>
                    <button className='btn btn-dark ms-3'>Search Now</button>
                  </div>  
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="delivery-img w-100 d-flex justify-content-center align-items-center">
                  <img src="/image/Online-delivery-1.png" alt="delivery" className='img-fluid'/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='tips_tricks mt-4 mb-4'>
          <div className="container">
            <span className='title d-block text-center mt-5'>New Arivals</span>
            <h2 className='text-center mb-5'>Latest Tips And Tricks</h2>
            <div className="row">
                {getTipsTricks}
            </div>
          </div>
        </section>
        <section className='slide-img'>
          <SlideImg/>
        </section>
        <Footer/>
    </>
  )
}

export default Home
