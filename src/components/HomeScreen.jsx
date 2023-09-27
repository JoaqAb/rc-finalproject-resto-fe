import React from 'react'
import './homeScreen.css';
import { Row,Col } from 'react-bootstrap';

export const HomeScreen = () => {
  return (
    <div  >
      <Row className='row-home'>
        <Col className= "d-flex justify-content-center text-center align-items-center m-4 p-3">
          <h1>Proximamente...</h1>
        </Col>
      </Row>

    </div>
  )
}

export default HomeScreen
