import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CloseButton from 'react-bootstrap/CloseButton';
import './Value.css'
import CartContext from '../productList/CartContext';
import { useLayoutEffect } from 'react';

// b삭제
function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

// 가격 , 추가
function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ValueReturn(props) {
    const titledel = removebtag(props.title);

    const [quantityCount, setquantityCount] = useState(1);
    const [isDeleted, setIsDeleted] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { totalPrice, setTotalPrice } = useContext(CartContext);


    useLayoutEffect(() => {
        let getItemPrice = localStorage.getItem('cartList')
        let cartList = JSON.parse(getItemPrice);
        let prices = cartList.map(item => parseFloat(item.price.replace(/,/g, '')));
        console.log('prices', prices)
        let localAddPrice = prices.reduce((a, b) => a + b, 0);
        console.log('localPrice', localAddPrice)
        setTotalPrice(localAddPrice);
    }, [setTotalPrice]);

    // +버튼
    function plusButton() {
        setquantityCount(quantityCount + 1);
        if (totalPrice === 0) {
            setTotalPrice(totalPrice + (quantityCount * props.price))
        } else {
            setTotalPrice(totalPrice + (props.price * 1))
        }
    }

    // -버튼
    function minusButton() {
        if (quantityCount > 1) {
            setquantityCount(quantityCount - 1);
            setTotalPrice(totalPrice - props.price); // 
        }
    }

    // 삭제 버튼
    function delCartList() {
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        const updatedCartList = cartList.filter(item => item.id !== props.id);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList));
        const deletedItemPrice = props.price * quantityCount;
        setTotalPrice(prevTotalPrice => prevTotalPrice - deletedItemPrice);
        setIsDeleted(true);
    }

    // 삭제됬으면 화면에 x
    if (isDeleted) {
        return null;
    }

    return (
        <div className="product-item" style={{ display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px' }}>
            <div className="product-image" style={{ marginRight: '20px', flexShrink: 0 }}>
                <img
                    src={props.image}
                    alt="Product"
                    style={{
                        width: isMobile ? "7rem" : "8rem",
                        height: isMobile ? "7rem" : "8rem",
                        borderRadius: "10px",
                        objectFit: "cover"
                    }}
                />
            </div>
            <div className="product-details" style={{ flexGrow: 1 }}>
                <div className="product-title" 
                style={{ fontSize: '20px', 
                marginBottom: '10px', 
                fontWeight: 'bold' 
                }}>{titledel}</div>

                <div className="product-price" 
                style={{ marginBottom: '10px', 
                fontSize: '18px', 
                color: '#007bff' 
                }}>{addCommas(props.price * quantityCount)}원</div>

                <div className="product-quantity" style={{ marginBottom: '10px' }}>
                    <button onClick={minusButton} style={{ padding: '5px 10px', fontSize: '18px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginRight: '5px' }}>-</button>
                    <input type='text' value={quantityCount} style={{ width: '40px', textAlign: 'center', fontSize: '16px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', margin: '0 5px' }} readOnly />
                    <button onClick={plusButton} style={{ padding: '5px 10px', fontSize: '18px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginRight: '5px' }}>+</button>
                </div>
            </div>
            <CloseButton onClick={delCartList} style={{ marginLeft: '20px', cursor: 'pointer' }} />
        </div>
    );
}

export default ValueReturn;