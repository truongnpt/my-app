import Image from 'next/image'
import { StyledMessage, StyledCard } from 'styles/StyledMessage';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const Message = (props) => {
  const { setComponent } = props;

  const handleClick = () => {
    setComponent('gift');
  }
  return (
    <StyledMessage>
        <Container className="hero-section d-flex flex-column justify-content-xl-center">
        <Row className="align-items-center justify-content-between">
          <Col className="col-9 mt-2 py-0">
              <h3>Trúc Luy</h3>
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
        <Row className='loading'>
          <Col className="col-12 col-lg-6">
              <Card>
                <StyledCard>
                  <h5>Sinh nhật vui vẻ nha Luy ơi!</h5>
                  <p>
                    Hôm nay sinh nhật bạn, chúc bạn tuổi mới ngày càng xinh, luôn tràn đầy niềm vui, và hạnh phúc bên nha, làm tiền vào như nước và những điều bạn ước sẽ thành hiện thực nha.
                  </p>
                  <p>
                    <b><i>Và đây là mình kiếm trên mạng:</i>😁</b>
                  </p>
                  <p>
                    Sinh nhật vui vẻ ý nghĩa nha
                    <br/>
                    Chúc cho hạnh phúc đậm đà tình yêu
                    <br/>
                    Chúc cho sức khỏe thật nhiều
                    <br/>
                    Chúc cho may mắn vạn điều bình an
                    <br/>
                    Lắm tiền nhiều bạc giàu sang
                    <br/>
                    Niềm vui hạnh phúc càng ngày càng xinh.
                  </p>
                  <p className="d-flex justify-content-end"><i>--Trường Npt--</i></p>
                </StyledCard>
              </Card>
              <div
                className="hero-content--learn-more"
              >
                <Button
                  className="button d-flex m-auto"
                  onClick={() => handleClick()}
                >
                  <span>Tặng Bạn Món Quà Nèk</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledMessage>
  );
}
