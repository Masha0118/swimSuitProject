import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function TwoButton({check, props}) {
    const [showModal, setShowModal] = useState(false);


    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }


    const handleCheck = () => {
        if (check === true) {
            const checkedItemId = props.cartList.filter(item => item.checked).map(item => item.id);
            const updatedCartList = JSON.parse(localStorage.getItem('cartList')).filter(item => !checkedItemId.includes(item.id));
            localStorage.setItem('cartList', JSON.stringify(updatedCartList));
            window.location.reload();
        }
    }

    const handleCancel = () => {
        handleCloseModal();
    }

    return (
        <>
            <div className='btn'>
                <ButtonGroup aria-label="Basic example" style={{ margin: "10px", display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="secondary" style={{ width: "5%", height: "auto" }}>전체 선택</Button>
                    <Button variant="secondary" onClick={handleShowModal} style={{ width: "5%", height: "auto" }}>선택 삭제</Button>
                </ButtonGroup>

                <Modal show={showModal} onHide={handleCloseModal}>

                    <Modal.Header closeButton>
                        <Modal.Title>shooping.naver.com 내용:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>선택하신 상품을 장바구니에서 삭제하시겠습니까?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCheck}>확인</Button>
                        <Button variant="primary" onClick={handleCancel} >취소</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default TwoButton;