import React, { useContext, useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';
import CartContext from '../productList/CartContext';
import ProductDetail from '../productList/ProductDetail';

function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function PopItemCard(props) {
    const commas = addCommas(props.price);
    const titleDel = removebtag(props.title);
    const { setCartList } = useContext(CartContext);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        const item = { title: props.title, image: props.image, price: props.price, id: props.id, brand: props.brand };
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        cartList.push(item);
        localStorage.setItem('cartList', JSON.stringify(cartList));
        setCartList(cartList);
        setShowModal(false);
        window.location.href = "/shoppingcart"; // 장바구니 페이지로 이동
    };

    useEffect(() => {
        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }
    }, [setCartList]);

    return (
        <Col className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: isMobile ? '15rem' : '30rem' }}>
                <Card.Img
                    variant="top"
                    src={props.image}
                    style={{
                        objectFit: "cover",
                        height: isMobile ? "15rem" : "30rem"
                    }}
                />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', alignItems: 'center'
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: isMobile ? "16px" : "20px"
                        }}>{commas} 원</span>

                        <div style={{ marginLeft: isMobile ? 0 : 'auto', marginTop: isMobile ? '10px' : 0 }}>
                            <Button
                                className='mx-1'
                                variant="secondary"
                                size={isMobile ? 'xs' : 'sm'}
                                style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
                            >구매하기</Button>

                            <Button
                                variant='success'
                                size={isMobile ? 'xs' : 'sm'}
                                style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
                                onClick={() => setShowModal(true)}
                            >장바구니 담기</Button>
                        </div>
                    </div>
                </Card.Body>
                <ProductDetail props={props} />
            </Card>
            
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>장바구니에 상품을 추가하시겠습니까?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddToCart}>
                        네
                    </Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        취소
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
}

export default PopItemCard;