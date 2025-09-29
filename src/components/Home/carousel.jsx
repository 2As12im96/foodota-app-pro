function Carousel() {
  return (
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <img decoding="async" src="/image/hw-5-1-300x300.jpg" alt="icon" className="testi-avatar avatar-sm avatar-scale-up shadow border-radius-lg border-0 active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"/> <span className="text-white mx-2"></span>

                <img decoding="async" src="/image/hw-3-300x300.png" alt="icon" className="testi-avatar avatar-sm avatar-scale-up shadow border-radius-lg border-0" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"/> <span className="text-white mx-2"></span>

                <img decoding="async" src="/image/hw-2-300x300.png" alt="icon" className="testi-avatar avatar-sm avatar-scale-up shadow border-radius-lg border-0" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-current="true"/> <span className="text-white mx-2"></span>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img decoding="async" className="mb-4" src="/image/06.png" alt=""/>
                <p className="testi-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content3</p>
                <div className="testi-author text-xl-start text-xs-center text-sm-center text-md-center d-md-block d-sm-block">
                    <div className="testi-name">
                    <span>Alex John Doe</span>
                    <div className="testi-stats">
                        <small className="opacity-6">Senior Chef</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                    <img decoding="async" className="mb-4" src="/image/05.png" alt=""/>
                    <p className="testi-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</p>
                    <div className="testi-author text-xl-start text-xs-center text-sm-center text-md-center d-md-block d-sm-block">
                        <div className="testi-name">
                        <span>Alex John Doe</span>
                        <div className="testi-stats">
                            <small className="opacity-6">Master Chef</small>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img decoding="async" className="mb-4 no-margin" src="/image/logo-3-120x120.png" alt=""/>
                    <p className="testi-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reader will be distracted by the readable content</p>
                    <div className="testi-author text-xl-start text-xs-center text-sm-center text-md-center d-md-block d-sm-block">
                        <div className="testi-name">
                        <span>Alex John Doe</span>
                        <div className="testi-stats">
                            <small className="opacity-6">Master Chef</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Carousel
