import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartContext from '../productList/CartContext';

// 가격 , 추가
function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 상품 금액 , 배송비 , 결제예정금액
function BottomStack() {
    const { totalPrice, setTotalPrice } = useContext(CartContext);
    let comma = addCommas(totalPrice)
    let totalComma = addCommas(totalPrice + 3000)


    useEffect(() => {
        // console.log('totalPrice', totalPrice)
        // console.log('commas', comma)
        // console.log('commas', typeof comma)
    }, [totalPrice, setTotalPrice])

    return (
        <div>
            <Container style={{ backgroundColor: '#fff', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px' }}>
                <Row xs={1} md={5} className="align-items-center">
                    <Col className="text-center">
                        <div style={{ fontSize: '16px', marginBottom: '10px' }}>총 상품금액</div>
                        <div style={{ fontSize: '20px', color: '#007bff' }}>{comma}원</div>
                    </Col>

                    <Col className="text-center">
                        <div style={{ fontSize: '20px', color: '#007bff', marginBottom: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #007bff', display: 'flex', alignItems: 'center', justifyContent: 'center' , marginLeft:'40%' }}>+</div>
                    </Col>

                    <Col className="text-center">
                        <div style={{ fontSize: '16px', marginBottom: '10px' }}>배송비</div>
                        <div style={{ fontSize: '20px', color: '#007bff' }}>3,000원</div>
                    </Col>

                    <Col className="text-center">
                        <div style={{ fontSize: '20px', color: '#007bff', marginBottom: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'40%'}}>=</div>
                    </Col>

                    <Col className="text-center">
                        <div style={{ fontSize: '16px', marginBottom: '10px' }}>결제예정금액</div>
                        <div style={{ fontSize: '20px', color: '#007bff' }}>{totalComma}원</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BottomStack;
