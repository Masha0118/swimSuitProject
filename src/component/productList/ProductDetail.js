import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}


function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ProductDetail({ props }) {
    const [lgShow, setLgShow] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [inMouse, setInMouse] = useState(false);

    const titleDel = removebtag(props.title);
    const commas = addCommas(props.price);

    const mouseMove = (e) => {
        const MouselLocation = e.target.getBoundingClientRect(); // 현재 요소에 대한 위치값을 전달해주는 메서드
        const x = e.clientX - MouselLocation.left; 
        const y = e.clientY - MouselLocation.top;
        // console.log('top',rect.top, 'right', rect.right, 'bottom', rect.bottom, 'left', rect.left)
        // console.log('x', x);
        // console.log('y', y);
        setMousePosition({ x, y });
    };
    
    const mouseEnter = () => {
        setInMouse(true);
    };

    const mouseLeave = () => {
        setInMouse(false);
    };
    
    return (
        <>
            <Button variant="primary" size="m" onClick={() => setLgShow(true)}>
                자세히 보기
            </Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {titleDel}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                    }}
                    onMouseMove={mouseMove}
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                >
                    <img
                        src={props.image}
                        alt={titleDel}
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                    />
                    {inMouse && (
                        <div
                            style={{
                                position: 'absolute',
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                                width: '300px',
                                height: '300px',
                                border: '2px solid white',
                                borderRadius: '20px',
                                zIndex: 1000,
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={props.image}
                                alt={titleDel}
                                style={{
                                    position: 'absolute',
                                    left: `-${mousePosition.x * 1.5}px`,
                                    top: `-${mousePosition.y * 1.7}px`,
                                    width: '300%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}
                </div>
            </Modal.Body>
                <Modal.Header>
                    <span style={{ fontSize: '20px', fontWeight:'bold' }}>
                        브랜드: {props.brand ? props.brand : '자사몰'}
                    </span>
                </Modal.Header>
                <Modal.Header>
                    <span style={{ fontSize: '20px' }}>가격: {commas}원</span>
                </Modal.Header>
            </Modal>
        </>
    );
}

export default ProductDetail;