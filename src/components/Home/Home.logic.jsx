import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function useHomeLogic() {
    // food menu data
    const foodMenu = [
        {
            id: 1,
            name: 'Pizza',
            image: '/image/Layer256-1.png',
            items: 7,
        },
        {
            id: 2,
            name: 'Broast',
            image: '/image/1qLayer-1.png',
            items: 4,
        },
        {
            id: 3,
            name: 'Chicken',
            image: '/image/sa1.png',
            items: 7,
        },
        {
            id: 4,
            name: 'Burger',
            image: '/image/pngwing.png',
            items: 20,
        },
        {
            id: 5,
            name: 'Shakes',
            image: '/image/qawLayer-1.png',
            items: 22,
        },
        {
            id: 6,
            name: 'Sandwiches',
            image: '/image/sssssa1.png',
            items: 6,
        },
        {
            id: 7,
            name: 'Pasta',
            image: '/image/Layezr-1.png',
            items: 11,
        },
        {
            id: 8,
            name: 'Dessert',
            image: '/image/asasLayer-1.png',
            items: 15,
        },
    ];
    // function to get food menu data
    const getFoodMenu = foodMenu.map((food)=>{
        return(
            <div key={food.id} className='col-lg-3 col-md-6'>
                <Link to='/meals'>
                    <div id={food.id} className="food_child text-center m-3">
                        <div className="card-img w-100">
                            <img src={food.image} alt={food.name} className='img-fluid'/>
                        </div>
                        <h4>{food.name}</h4>
                        <p>{food.items} Restaurants Products</p>
                    </div>
                </Link>
            </div>
        )
    });
    //Papular Restaurant Data
    const popularRestaurants = [
        {
            id: 1,
            name: 'Organic Arcadian Food',
            image: '/image/default-banner.jpg',
            rating: 5,
            time: '12:01 am - 11:59 pm',
            location: 'Main Boulevard, Lahore,',
            brandImage: '/image/brand-1.jpg'
        },
        {
            id: 2,
            name: 'Tasty Food Pizza',
            image: '/image/broadway.jpg',
            rating: 5,
            time: '12:01 am - 11:59 pm',
            location: '1157 Broadway, New York',
            brandImage: '/image/brand-2.jpg'
        },
        {
            id: 3,
            name: 'Food Chef Italian',
            image: '/image/downtown.jpg',
            rating: 5,
            time: '11:59 pm - 11:58 pm',
            location: ' Suite# 3, Abu Dhabi,',
            brandImage: '/image/brand-3.jpg'
        },
        {
            id: 4,
            name: 'Toni Food Hub',
            image: '/image/hardees.jpg',
            rating: 5,
            time: '12:01 am - 11:59 pm',
            location: 'Street 5, Oaxaca, Sonora,',
            brandImage: '/image/brand-4.jpg'
        },
        {
            id: 5,
            name: 'Masterchef Chinese Food',
            image: '/image/Howdy.jpg',
            rating: 5,
            time: '12:04 am - 11:55 pm',
            location: ' Suite# 2 Street 5 Main',
            brandImage: '/image/brand-5.jpg'
        },
        {
            id: 6,
            name: 'Fun Chicken Meals',
            image: '/image/mcdonalds.jpg',
            rating: 5,
            time: '12:05 am - 11:55 pm',
            location: ' Street 6 Park Avenue,',
            brandImage: '/image/brand-6.jpg'
        },
        {
            id: 7,
            name: 'Chef Ganteng Restaurant',
            image: '/image/monal.jpg',
            rating: 5,
            time: '12:06 am - 11:57 pm',
            location: 'Main Boulevard,',
            brandImage: '/image/brand-7.jpg'
        },
        {
            id: 8,
            name: 'Marshall Steak House',
            image: '/image/Howdy.jpg',
            rating: 5,
            time: '12:04 am - 11:59 pm',
            location: 'Suite# 9 Main Boulevard,',
            brandImage: '/image/brand-8.jpg'
        },
    ];
    // function to get popular restaurants data
    const getPopularRestaurants = popularRestaurants.map((restaurant) => {
        return (
                <div key={restaurant.id} className="col-lg-3 col-md-6">
                    <Link to='/meals'>
                        <div className="card position-relative popular_item">
                            <img src={restaurant.image} alt="popular-1" className='img-fluid'/>
                            <span className='shipping-icon'>
                            <FontAwesomeIcon icon={faTruckFast} />
                            </span>
                            <span className='d-flex justify-content-between align-items-center feedback'>
                            <span className='stars'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className='rating'>{restaurant.rating}</span>
                            </span>
                            <div className="card-body">
                                <h5 className="card-title mt-3 mb-4">{restaurant.name}</h5>
                                <div className="card-info d-flex justify-content-between align-items-center">
                                <img src={restaurant.brandImage} alt="repo" />
                                <span className='icons-data w-75'>
                                    <span className='clock d-flex align-items-center mb-3'>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className='time'>{restaurant.time}</span>
                                    </span>
                                    <span className='location d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span className='place'>{restaurant.location}</span>
                                    </span>
                                </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>  
        );
    });
    //Super Delicious Deal Data
    const getDealFood = [
        {
            id: 1,
            name: 'Crispy Fry Burger',
            image: '/image/pngegg-14-3.png',
            description: 'Savor the crunch with this crispy fry burger — a golden-fried patty stacked',
            price: 100,
            discount: 120
        },
        {
            id: 2,
            name: 'Crazy Family Deal',
            image: '/image/05-1-1.png',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem',
            price: 250,
            discount: 300
        },
        {
            id: 3,
            name: 'Crispy Fry Burger',
            image: '/image/01-1-1.png',
            description: 'Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a',
            price: 600,
            discount: 690
        },
        {
            id: 4,
            name: 'Fandango Burger',
            image: '/image/foodota-burger1-300x300.png',
            description: 'Potato skins, chicken strips, toasted ravioli and mozzarella sticks served with',
            price: 600,
            discount: 690
        },
        {
            id: 5,
            name: 'Wrangler Burger',
            image: '/image/02-2.png',
            description: 'Blackened chicken, sauteed onions and peppers smothered with pepper jack and',
            price: 500,
            discount: 590
        },
        {
            id: 6,
            name: 'Double Cheese Burger',
            image: '/image/04-2.png',
            description: 'Special Burger, deep-fried beef ravioli served with marinara sauce and topped',
            price: 500,
            discount: 590
        },
        {
            id: 7,
            name: 'Cheddar Cheese burger',
            image: '/image/05-2.png',
            description: 'Hot & Grilled nachos smothered in cheddar cheese, beef, black olives, onions,',
            price: 590,
            discount: 650
        },
        {
            id: 8,
            name: 'Howdy Hamburger',
            image: '/image/06-2.png',
            description: 'Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to',
            price: 120,
            discount: 190
        },
    ]
    // function to get deal food data
    const getDealFoodData = getDealFood.map((deal) => {
        return (
                <div key={deal.id} className="col-lg-3 col-md-6">
                    <Link to='/meals' >
                    <div className="deal_item">
                        <img src={deal.image} alt="deal-1" className='img-fluid'/>
                        <div className="card-body">
                        <h5 className="card-title">{deal.name}</h5>
                        <p className="card-text">{deal.description}</p>
                        <span className='price-discount d-flex justify-content-between align-items-center'>
                            <span className='price'>£{deal.price}.00</span>
                            <span className='discount'>£{deal.discount}.00</span>
                        </span>
                        </div>
                    </div>
                    </Link>
                </div>            
        );
    });
    //Super Pizza Deals Data
    const getPizzaDeals = [
            {
                id: 1,
                name: 'Crazy Family Deal',
                image: '/image/06-1-1.png',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem',
                price: 250,
                discount: 300
            },
            {
                id: 2,
                name: 'Cauliflower Pizza',
                image: '/image/01-1-2.png',
                description: 'Special Cauliflower Pizza, Add your favourite toppings and create your own',
                price: 200,
                discount: 260
            },
            {
                id: 3,
                name: 'Tikka Heat Pizza',
                image: '/image/02-1-1.png',
                description: 'Medium size special tikka heart pizza Green Peppers, Mushrooms, Onions,',
                price: 500,
                discount: 550
            },
            {
                id: 4,
                name: 'Sicilian Pizza',
                image: '/image/03-1-1.png',
                description: 'Sillicon Pizza with Chapli Chicken, Green Chilli,  Green Peppers, Onions,',
                price: 300,
                discount: 390
            },
            {
                id: 5,
                name: 'Crown Crust',
                image: '/image/04-1-1.png',
                description: 'Green tikka mint mayo drizzle jalapenos onions tomatoes mozarella with marinara',
                price: 490,
                discount: 550
            },
            {
                id: 6,
                name: 'Hot & Spicy Pizza',
                image: '/image/05-1-1.png',
                description: 'Spicy Chicken, Jalapenos, Onions, Corn, Green Pepper, Ranch Drizzle on a Peri',
                price: 690,
                discount: 720
            },
            {
                id: 7,
                name: 'Stuff Crust Pizza',
                image: '/image/06-1-1.png',
                description: 'Sliced Chicken Poppers, Green Peppers, Mushrooms, Onions, Tomatoes, Ranch',
                price: 290,
                discount: 320
            },
            {
                id: 8,
                name: 'Tandoori Pizza',
                image: '/image/06-1-1.png',
                description: 'Medium size pizza with Chapli Chicken, Green Chilli,  Green Peppers, Onions,',
                price: 350,
                discount: 420
            },
    ];
    // function to get pizza deals data
    const getPizzaDealsData = getPizzaDeals.map((pizza) => {
        return (
                  <div key={pizza.id} className="col-lg-3 col-md-6">
                    <Link to='/meals'>
                        <div className="deal_item">
                        <img src={pizza.image} alt="deal-1" className='img-fluid'/>
                        <div className="card-body">
                            <h5 className="card-title">{pizza.name}</h5>
                            <p className="card-text">{pizza.description}</p>
                            <span className='price-discount d-flex justify-content-between align-items-center'>
                            <span className='price'>£{pizza.price}.00</span>
                            <span className='discount'>£{pizza.discount}.00</span>
                            </span>
                        </div>
                        </div>
                    </Link>
                  </div>            
        );
    });
    // mails data
    const getMailsData = [
        {
            id:1,
            title:'Place Your Order',
            description:'Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.',
            image:'/image/002-checklist.png'
        },
        {
            id:2,
            title:'Receive Order',
            description:'Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.',
            image:'/image/earning.png'
        },
        {
            id:3,
            title:'Cash On Delivery',
            description:'We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied .',
            image:'/image/003-deliver.png'
        }
    ];
    // function to get mails data
    const getMailsDataContent = getMailsData.map((mail) => {
        return (
            <div key={mail.id} className="col-lg-4 col-md-6">
                <Link to='/meals'>
                    <div className="card">
                        <img src={mail.image} alt={`mail-${mail.id}`} />
                        <h3>{mail.title}</h3>
                        <p>{mail.description}</p>
                    </div>
                </Link>
            </div>
        );
    });
    //Team Members Data
    const teamMembers = [
        {
            id: 1,
            name: 'Alizeh Anderson',
            role: 'Senior Chef',
            image: '/image/team1.png',
        },
        {
            id: 2,
            name: 'Angelina John Doe',
            role: 'Master Chef',
            image: '/image/team2.png',
        },
        {
            id: 3,
            name: 'Andre Smith',
            role: 'Professor',
            image: '/image/team3.png',
        },
        {
            id: 4,
            name: 'Christina Chi',
            role: 'Psychologist',
            image: '/image/team4.png',
        }
    ];
    // function to get team members data
    const getTeamMembers = teamMembers.map((member) => {
        return(
                <div key={member.id} className="col-lg-3 col-md-6">
                    <Link to='/meals' >
                        <div className="person">
                            <div className="person-img">
                                <img src={member.image} alt={`chief-${member.id}`} />
                            </div>
                            <div className="person-info p-3">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
        )
    });
    //Tips and Tricks Data
    const tipsTricks = [
        {
            id:1,
            name:'Appetizers',
            title:'Amazing Decadent Pecan PIE Best Cake',
            discription:'Pie is a rich chewy, nutty, sweet holiday staple. For many the holidays aren’t the holidays without must explain all this  of denouncing pleasure and praising pain was born and…',
            image:'/image/pexels-abhinav-goswami-291528-440x250.jpg',
        },
        {
            id:2,
            name:'Appetizers',
            title:'Vegetable & Chicken Wrap For Lunch',
            discription:'I love a good salad for lunchand Pakistan posted dinner.And I have them often. But I also love my carbs. So a little while back,qui dolorem ipsum quia dolor sit…',
            image:'/image/post-2-1-440x250.jpg',
        },
        {
            id:3,
            name:'Sushi',
            title:'Black Special hot Suchi with Salad Serving',
            discription:'I always love a little sweet andcreamy salty taste at parties and this Brie has just that! Baked brie is an appetizer that will wow the entire party. Sed ut perspiciatis…',
            image:'/image/post-3-440x250.jpg',
        },
        {
            id:4,
            name:'Appetizers',
            title:'Best Ever Healthy Breakfast Everyday',
            discription:'Impress your family with this beautiful cut of meat! When making this prime rib add healthy ingredients in your breakfast and stay active. Hope you’ll enjoy this cooked breakfast. Sed ut…',
            image:'/image/post-4-440x250.jpg',
        },
    ];
    // function to get tips and tricks data
    const getTipsTricks = tipsTricks.map((tips)=>{
        return(
                <div key={tips.id} className="col-lg-3 col-md-6">
                    <Link to='/meals'>
                        <div className="card">
                            <div className="card-img rounded">
                                <img src={tips.image} alt={`tips-${tips.id}`}  className='img-fluid rounded'/>
                            </div>
                            <div className="card-info">
                                <span>{tips.name}</span>
                                <h4>{tips.title}</h4>
                                <p>{tips.discription}</p>
                                <div className="admin-img d-flex align-items-center">
                                    <img src="/image/334c4a4c42fdb79d7ebc3e73b517e6f8.jpg" alt="person" />
                                    <span className='text ms-3'>
                                    <span className='d-block admin'>admin</span>
                                    <span className='d-block date'>March 22, 2021</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
        )
    });
    return {
        getFoodMenu,
        getPopularRestaurants,
        getDealFoodData,
        getPizzaDealsData,
        getMailsDataContent,
        getTeamMembers,
        getTipsTricks,
    }
}

export default useHomeLogic
