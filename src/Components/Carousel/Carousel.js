import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
// import { Navigate, useNavigate } from 'react-router-dom';

// const Navigate =useNavigate();

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item >
      
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="/hues of sky.avif" 
        alt="First slide"
        // onClick={()=>Navigate("/SubComponent/HuesOfSky")}
      />
      <Carousel.Caption className='Caption'>
        <h3>hues of sky</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="August Tower.avif"
        alt="Second slide"
      />
  

      <Carousel.Caption className='Caption'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="The collection.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Smart.avif"
        alt="Third slide"
      />
      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="TownHouse.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="IsleofLife.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="BusinessPark.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Boylevard.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Meridien.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Sheraton.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Residency Club.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src="Suncity Club.avif"
        alt="Third slide"
      />

      <Carousel.Caption className='Caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>



    
  </Carousel>
  </div>
  )
}

export default CarouselPage