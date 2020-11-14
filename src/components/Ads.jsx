import React from 'react';
import {Card} from 'react-bootstrap';
// import Ad1 from '../ad1.jpg'

function Ads(props){
    return(
        <div className='ads'>

      <div className="card" style={{width: '18rem'}}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price = {props.cost}</p>
          
        </div>
      </div>
    </div>
  
    );
}

export default Ads;