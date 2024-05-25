import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3" >
      <Container className='mb-1'>
        <Row>
          <Col md={4}>
            <h6 className='mb-3'>고객센터</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">주문배송조회</li>
              <li className="mb-2">반품 정책</li>
              <li className="mb-2">결제 방법</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className='mb-3'>이용약관</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">서비스 이용약관</li>
              <li className="mb-2">결제 이용약관</li>
              <li className="mb-2">환불 정책</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className='mb-3'>개인정보 처리방침</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">개인정보 수집 및 이용목적</li>
              <li className="mb-2">개인정보의 보유 및 이용기간</li>
              <li className="mb-2">개인 정보의 제3자 제공</li>
            </ul>
          </Col>
        </Row>
        <hr className='my-1'/>

        <Row>
          <Col>
            <p className="text-center mb-0 small">© 2024 수영복 온라인 쇼핑몰. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;