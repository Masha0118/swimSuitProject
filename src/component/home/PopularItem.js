import { useEffect, useState } from "react";
import PopItemCard from "./PopItemCard";
import { Row, Col } from "react-bootstrap";

// 배열을 랜덤하게 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function GetPopularItem() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const randomStart = Math.floor(Math.random() * 99) + 1;
            const ClientId = "q6nJostYODpavlKH_pBH";
            const ClientPassword = "nSDltXmnhJ";
            const response = await fetch(
                `/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=6&start=${randomStart}`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": ClientId,
                    "X-Naver-Client-Secret": ClientPassword,
                },
            });

            const json = await response.json();
            const shuffledItems = shuffleArray(json.items).slice(0, 2);
            setProducts(shuffledItems);
        };
        fetchData();
    }, []);

    return (
        <Row xs={1} md={2} className='g-4'>
            {products.map((item, index) => (
                <Col key={index}>
                    <PopItemCard
                        title={item.title}
                        image={item.image}
                        price={item.lprice}
                        id={item.productId}
                        brand={item.brand}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default GetPopularItem;