import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Ads from './components/Ads';
import Ad1 from './ad1.jpg';
import Ad2 from './ad2.jpg';
import Ad3 from './ad3.jpg';
import Ad4 from './ad4.jpg';
import Ad5 from './ad5.jpg';
import Ad6 from './ad6.jpg';
import Ad7 from './ad7.jpg';
import Ad8 from './ad8.jpg';
import Ad9 from './ad9.jpg';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
     <Header/>
  <Container>
      <Row>
        <Col> <Ads name='House' cost='2 Crore' image={Ad1} className='ad' /> </Col>
        <Col> <Ads name='House' cost='3 Crore' image={Ad2} className='ad' /> </Col>
        <Col> <Ads name='House' cost='4 Crore' image={Ad3} className='ad' /> </Col>
      </Row>
      <Row>
         <Col> <Ads name='Super Car' cost='34 Lac' image={Ad4} className='ad' />  </Col>
         <Col> <Ads name='Super Car' cost='40 Lac' image={Ad5} className='ad' />  </Col>
         <Col> <Ads name='Super Car' cost='50 Lac' image={Ad6} className='ad' />  </Col>
      </Row>
      <Row>
         <Col> <Ads name='Helicopter' cost='1 Crore' image={Ad7} className='ad' />  </Col>
         <Col> <Ads name='Helicopter' cost='2 Crore' image={Ad8} className='ad' /> </Col>
         <Col> <Ads name='Helicopter' cost='2.5 Crore' image={Ad9} className='ad' />  </Col>
      </Row>
  </Container>
 
     {/* <Footer/> */}
    </div>
    
  );
}

export default App;
