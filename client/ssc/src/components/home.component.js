import '../App.css';
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Home extends Component {
     render() {
        return (
              <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block text-center mx-auto p-3 my-auto"
                      src="/mia_glow.png"
                      alt="First slide"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Carousel.Caption>
                      <h3>Welcome to the Club</h3>
                      <p>Join us at our next event!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block text-center mx-auto p-3 my-auto"
                      src="/skatejoring_girl_huskey.png"
                      alt="skatejoring_girl_huskey.png"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  
                    <Carousel.Caption>
                      <h3>Fun for Everyone</h3>
                      <p>Especially the pups!!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block text-center mx-auto p-3 my-auto"
                      src="/skatejoring_orange_wheels.png"
                      alt="Third slide"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                
                    <Carousel.Caption>
                      <h3>Safety Third!</h3>
                      <p>No sandals allowed.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
        );
    }
    
}