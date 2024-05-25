import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Get from './Get';
import './Category.css';

function Category() {
    const [list, setList] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [brand, setBrand] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const clientId = "C88k7kKQEPtcbHOYYaRs";
    const clientSecret = "5XoMjg7Tdx";

    function filterByPriceRange(minPrice, maxPrice) {
        const priceTemp = list.filter(item => item.lprice >= minPrice && item.lprice <= maxPrice);
        setFilteredItems(priceTemp);
        setSelectedButton(`${minPrice}-${maxPrice}`);
    }

    const handleCategoryClick = (category) => {
        setBrand(category);
        setSelectedButton(category);
        showWaveEffect(() => fetchItems(category));
    };

    const getButtonClass = (button) => {
        return `button ${button} ${selectedButton === button ? 'selected' : ''}`;
    };

    const fetchItems = (category) => {
        if (category) {
            setIsLoading(true);
            fetch(
                `/v1/search/shop?query=${category}수영복&filter=used:false&sort=sim&display=100&start=1`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setList(json.items);
                    setFilteredItems(json.items);
                    setIsLoading(false);
                })
                .catch(() => setIsLoading(false));
        }
    };

    const showWaveEffect = (callback) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            callback();
        }, 1000);
    };

    const buttons = [
        ['남성', '여성'],
        ['아레나', '나이키', '르망고', '배럴', '후그', '센티', '키치피치', '스웨이브', '비키니밴더', '엘르', '토네이도', '미즈노', '발리비키', '티막', '나인에프엑스', '아디다스', '리복'
            , '스피도', 'UNKNOWN', '랠리', '레노마', '아쿠아티카', '티어', '제테스', '723후그', '엑스블루', '제이커스', '버버리', '캘빈클라인', '펑키타', '아날도바시니', '쿠기'
            , '제인코트', 'GANNI', 'H&M', '스키즈', 'TOTEME', '데이즈데이즈', '닉스원', '필로드', '헤링본', '돌핀', '티에스나인', '에르메스', '오스카', '알라이아 컷아웃', '샤넬', '구찌'],
        ['빨강', '파랑', '초록', '노랑', '주황', '보라', '아이보리', '민트', '핑크', '화이트', '블랙'],
    ];

    const colorClasses = ['red-button', 'blue-button', 'green-button', 'yellow-button', 'orange-button', 'purple-button', 'ivory-button', 'mint-button', 'pink-button', 'white-button', 'black-button'];

    const priceRanges = [
        { min: 10000, max: 20000 },
        { min: 20000, max: 40000 },
        { min: 40000, max: 80000 },
        { min: 80000, max: 120000 },
        { min: 120000, max: 180000 },
        { min: 180000, max: 360000 },
        { min: 360000, max: 720000 },
        { min: 720000, max: 1440000 },
        { min: 1440000, max: 2880000 },
    ];

    return (
        <>
            {isLoading && (
                <div className="wave-container">
                    <div className="wave"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                </div>
            )}
            <Accordion defaultActiveKey="0" className="main">
                {/* 성별 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="categoryHeader">성별</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[0].map((text, index) => (
                                <button key={index} className={getButtonClass(text)} onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 브랜드 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="categoryHeader">브랜드</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[1].map((text, index) => (
                                <button key={index} className={getButtonClass(text)} onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 색상 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="categoryHeader">색상</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {buttons[2].map((text, index) => (
                                <button key={index} className={`button ${colorClasses[index % colorClasses.length]}`} onClick={() => handleCategoryClick(text)}>{text}</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                {/* 가격 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="categoryHeader">가격</Accordion.Header>
                    <Accordion.Body className="categoryBody">
                        <div className="button-container">
                            {priceRanges.map(({ min, max }, index) => (
                                <button key={index} className={getButtonClass(`${min}-${max}`)} onClick={() => filterByPriceRange(min, max)}>{min.toLocaleString()}원 ~ {max.toLocaleString()}원</button>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Get filteredItems={filteredItems} isLoading={isLoading} />
            </Accordion>
        </>
    );
}

export default Category;
