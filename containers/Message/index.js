import React, { useState } from 'react';
import Image from 'next/image'
import { StyledMessage, StyledCard } from 'styles/StyledMessage';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const Message = (props) => {
  const { setComponent } = props;
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    console.log('ok');
    setShowHeart(true);
  }
  return (
    <StyledMessage>
        <Container className="hero-section d-flex flex-column justify-content-xl-center">
        <Row className="align-items-center justify-content-between">
          <Col className="col-9 mt-2 py-0">
              <h3 className='user-name'><div className="rotating">🌼</div>&nbsp;Kim Cúc</h3>
          </Col>
          <Col className="col-3 mt-2 py-0">
              <div className="top-image">
                <Image
                className='rotating'
                  src={'/kc.jpeg'}
                  width={40}
                  height={40}
                  alt="hero image"
                />
              </div>
          </Col>
        </Row>
        <hr className="mt-2" />
        <Row className='loading'>
          <Col className="col-12 col-lg-6">
              <Card>
                <StyledCard>
                  <h5>Hi Em!</h5>
                  <p>
                    Cũng hơn 1 tháng anh với em quen biết, nhắn tin và gặp nhau rùi.
                  </p>
                  <p>
                    Sau những lần đi chơi với em ák, anh dần dần có cảm tình và thích em nhiều hơn ❤️
                  </p>
                  <p>Cho anh cơ hội để quan tâm, yêu thương em nha.</p>
                  <p><strong>Làm bạn gái anh nhé 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹</strong></p>
                  <p className="d-flex justify-content-end"><i>--*Npt*--</i></p>
                </StyledCard>
              </Card>
              <div
                className="hero-content--learn-more"
              >
                <Button
                  className=" pulse heart-btn d-flex m-auto"
                  onClick={() => handleClick()}
                >
                  <span>💞</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
      {showHeart && (
        <div className="heart-gift">
        </div>
      )}
    </StyledMessage>
  );
}
