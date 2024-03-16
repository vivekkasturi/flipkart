export default function Carousel(){

    return(

        <div className="CarouselMain">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8f317257ae9d9789.jpeg?q=20" className="d-block" alt="..."/>
             
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20" className="d-block" alt="..." />
            
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20" className="d-block" alt="..." />
             
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        </div>
    )
}