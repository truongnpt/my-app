import React, { useState } from 'react';
import Image from 'next/image'
import { StyledGift, StyledHeroTitle } from 'styles/StyledGift';
import { Container, Row, Col, Button, Form, Nav } from 'react-bootstrap';

export const Gift = (props) => {
  const { setComponent } = props;
  const [code, setCode] = useState('');
  const [checkCode, setCheckCode] = useState(false);
  const compactCode = '123';

  const handleChange = (value) => {
    setCode(value);
  }
  const handleClick = () => {
    if(code === compactCode) {
      setCheckCode(false);
      window.open('tel:*100*123456789#', '_blank');
    } else {
      setCheckCode(true);
    }
  }
  
  return (
    <StyledGift>
        <Container className="loading hero-section d-flex flex-column justify-content-xl-center">
        <Row className="align-items-center justify-content-between">
          <Col className="col-9 mt-2 py-0">
              <h3>Trương Thị Trúc Luy</h3>
          </Col>
          <Col className="col-3 mt-2 py-0">
              <div className="top-image">
                <Image
                className='rotating'
                  src={'/luy.jpeg'}
                  width={40}
                  height={40}
                  alt="hero image"
                />
              </div>
          </Col>
        </Row>
        <hr className="mt-2" />
        <Row>
          <Col className="col-12 col-lg-6">
                <div className="gift-card mt-2 m-auto">
                  <Image
                    src={'/Gift_Card.png'}
                    width={634}
                    height={367}
                    alt="avata"
                  />
                  <Form.Control
                    className='mt-5'
                    type="number"
                    name="code"
                    placeholder="Nhập mã code"
                    onChange={(evt) => handleChange(evt.target.value)}
                  />
                  {checkCode && (
                    <Form.Control.Feedback type="invalid">
                      {'Nhập sai code rùi nèk :))'}
                    </Form.Control.Feedback>
                  )}
                </div>
              <div
                className="hero-content--learn-more d-flex "
              >
                <Button
                  className="button d-flex m-auto"
                  onClick={() => setComponent('login')}
                >
                  <span> Back</span>
                </Button>
                <Button
                  className="button d-flex m-auto"
                  disabled={code ? false : true}
                  onClick={() => handleClick()}
                >
                  <span>Open</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledGift>
  );
}
