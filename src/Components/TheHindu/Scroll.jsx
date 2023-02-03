// import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scroll.css'
function Scroll() {
  return (
    <div style={{display:"flex",alignItems:"center",gap: "171px",margin:"0"}}>
       <div>
       <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1541613569553-332a2574a508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nirmal K Minda, Chairman and MD of Uno Minda.</h3>
          <p>Driver assist features to be an important milestone, says Uno Minda Chairman</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>BlindHub</h3>
          <p>10 Problems You Could Face Without Health Insurance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Stock Market</h3>
          <p>
          Since its recent inception in the Olympics, skateboarding is having a moment in India. Have you stepped on the board yet? 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
       <div>
       <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Family</h3>
          <p>I can now spend more time with my son: Sania Mirza </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>International News</h3>
          <p>China’s smartphone sales plunge to lowest level in a decade: Report </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aXNuZXNzbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Buisnessman</h3>
          <p>
          Worldview with Suhasini Haidar | India’s neighbourhood outreach | What lies ahead for South Asia in 2023? 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
       <div>
       <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1589376807280-f86220f0b349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2x5bXBpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Olympics</h3>
          <p>Since its recent inception in the Olympics, skateboarding is having a moment in India. Have you stepped on the board yet? .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516540507469-9fff64887136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRoZSUyMGhpbmR1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kasmir</h3>
          <p>Kashmir’s pashmina shawls get new-age French touch .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Movies</h3>
          <p>
          ‘Thankam’ movie review: A layered character study and engaging procedural rolled in one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
    </div>
   
  );
}

export default Scroll;