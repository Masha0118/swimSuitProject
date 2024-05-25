import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Explain() {
    return (
        // 이용안내
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>이용안내</Accordion.Header>
                <Accordion.Body>
                    <h3>장바구니 이용안내</h3><br/>
                <p>1. 해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.</p>
                <p>2. 해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Explain;