import React from 'react'
import './home css/home.css'
import paddy from './cropsimg/paddy.jpg'
import tea from './cropsimg/tea.jpg'
import rubber from './cropsimg/rubber.jpg'
import coconut from './cropsimg/coconut.jpg'
import corn from './cropsimg/corn.jpg'
import coffee from './cropsimg/coffee.jpg'
import cinnamon from './cropsimg/ci.jpg'
import more from './cropsimg/more.jpg'
import bgImage from './Head video/headvid.mp4'


const Home = () => {
  return (
    <div>
      <div className="video">
        <div className="text-wrapper">
          <h4>Weclome to</h4>
          <h1>Farmi<span>fy</span></h1>
          <p>
      Farmify is an agricultural advice website offering expert tips, resources, 
      and tools to help farmers optimize crop yields, manage resources efficiently, 
      and stay updated with the latest farming practices.</p>
          <h5>Scroll down to Explore the Agriculture</h5>
        </div>
        <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4'/>
      </video>
     
    </div>
    <div className='head'>
      <h2>Crop Database</h2>
      <p>We have detailed information on a wide range of crops, including planting guidelines, 
      soil requirements, pest control, and harvesting techniques.You can get so many information 
      about agricultagricultural crops from “Farmify”. join as platinum member and sher your experianseexperience
      amoung other members.</p>
    </div>
    <div className="cards">
      <div className="card">
        <img src={paddy} alt="paddy" />
          <h3>Paddy</h3>
        <p>A paddy field is a flooded field of arable land used for growing semiaquatic crops, most notably rice and taro.</p>
        <a href="#paddy.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={tea} alt="tea" />
          <h3>Tea</h3>
        <p> Tea is a popular beverage made from Camellia sinensis leaves, enjoyed globally for its various flavors and health benefits.</p>
        <a href="#tea.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={rubber} alt="rubber" />
          <h3>Rubber</h3>
        <p>The rubber tree, scientifically known as Hevea brasiliensis, is a large tropical tree native to South America</p>
        <a href="#rubber.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={coconut} alt="coconut" />
          <h3>Coconut</h3>
        <p>The coconut (Cocos nucifera) is a large palm tree that grows up to 30 meters tall and produces the coconut fruit.  </p>
        <a href="#coconut.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={corn} alt="corn" />
        <h3>Corn</h3>
        <p>Corn, also known as maize, is a tall annual cereal grass that produces large ears of kernels. </p>
        <a href="#corn.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={coffee} alt="coffee" />
         <h3>Coffee</h3>
        <p>Coffee is a popular beverage made from the roasted and ground seeds of the coffee plant (Coffea) </p>
        <a href="#coffee.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={cinnamon} alt="cinnamon" />
          <h3>Cinnamon</h3>
        <p>The Cinnamon is a spice obtained from the inner bark of trees from the genus Cinnamomum. </p>
        <a href="#cinnamon.jsx">Visit</a>
      </div>

      <div className="card">
        <img src={more} alt="more" />
         <h3>More</h3>
        <p>You can get some experience about other crops from here.click visit.</p>
        <a href="#more.jsx">Visit</a>
      </div>

      



    </div>
    </div>
  );
};

export default Home