import React, { useContext, useEffect } from 'react';
import ValueReturn from './Value';
import CartContext from '../productList/CartContext';

function ShoppingCart({ check, setCheck }) {
    const { cartList, setCartList } = useContext(CartContext);

    useEffect(() => {
        // 로컬 스토리지 
        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }
    }, [ setCartList ]);

    return (
        <>
            {/* 장바구니가 비어있는지 체크 */}
            {cartList.length === 0 ? (
                <div style={{display: 'flex', justifyContent: 'center'}}><span style={{fontSize: '30px', color: 'gray'}}>장바구니가 비어있습니다!</span></div>
            ) : (
                cartList.map((item, index) => (
                    <ValueReturn
                        key={index}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        id={item.id}
                        check={check}
                        setCheck={setCheck}
                    />
                ))
            )}
        </>
    );
}

export default ShoppingCart;
