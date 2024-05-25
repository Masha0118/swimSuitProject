import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Welcome.css";
import GetPopularItem from './PopularItem';
import { useMediaQuery } from 'react-responsive';

function Welcome({list, setList}) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            <h1 style={{textAlign:'center'}}>추천 상품</h1>
            <Carousel controls={true}>
                {[...Array(3)].map((_, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="m-5">
                                <GetPopularItem 
                                isMobile={isMobile} 
                                list={list} 
                                setList={setList} />
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Welcome;