import React from 'react';
import App from '../App';


const SmartWebCheckin = () => {
  return (
    <div className="container">
      <div className="campaign">
        <div className='campaign-content'><h2>Campaign header, maximum two lines</h2>
          <p>validity</p>
          <button className='primary-button'>Button</button></div>
        <img src="/assets/SmartWebCheckin/bakery.jpg" alt="Campaign Banner" className="campaign-image" />
      </div>
      <div className="web-checkin-container">
        <h1>Make your web check in fast and simple</h1>
        <div className="web-checkin">
          <h2>HOW CAN YOU WEB CHECK-IN</h2>
          <p>
            Web Check-In for domestic flights is available from 48 hrs to 60 mins before Domestic flight departure and 48 hrs to 75 mins before International flight departure.
          </p>
          <p>
            Approach the counter at least 60 minutes before domestic flight departures and 75 mins before International flight departures.
          </p>
        </div>

      </div>
      <div className='container smart-checkin-container'>
        <div className="smart-checkin">
          <h3>SMART WEB CHECK-IN</h3>
          <a href="#" className="view-link">VIEW &gt;</a>
        </div>
        <div className='boarding-pass'>
          <h2>Get your Boarding Pass automatically</h2>
        </div>
        <div className="checkin-points">
          <div className='boarding'>
            <p>+ Schedule your web check-in beforehand</p>
            <p>+ Receive your boarding pass on WhatsApp</p>
          </div>
          <img src="/assets/SmartWebCheckin/Bording.jpg" alt="Boarding" className="boarding-image" />

          <div className="promo-container">
            <div className="promo"
              style={{ backgroundImage: 'url(/assets/SmartWebCheckin/promo-background.jpg)' }}>
              <div className="promo-content">
                <h3>Save up to 10% on your journey.</h3>
                <p>Bengaluru flights starting from ₹5699.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};


export default SmartWebCheckin;
