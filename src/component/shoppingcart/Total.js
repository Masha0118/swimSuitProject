import React, { useContext, useState } from 'react';
import TwoButton from './TwoButton';
import ShoopingCart from './ShoopingCart';
import BottomStack from './BottomStack';
import Explain from './Explain';
import CartContext from '../productList/CartContext';



// 최상위 컴포넌트
function Cartreturn() {

    const [check, setCheck] = useState(false)
    const { totalPrice, setTotalPrice } = useContext(CartContext);

    return (
        <div>
            <TwoButton check={check} setCheck={setCheck} />
            <hr />
            <ShoopingCart check={check} setCheck={setCheck}  />
            <hr className='my-4'/>
            <BottomStack totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            <hr className='my-4'/>
            <Explain/>    
        </div>
    )
}

export default Cartreturn;