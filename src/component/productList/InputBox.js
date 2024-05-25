import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function InputBox({ setList }) {
    const [search, setSearch] = useState('');
    const [allList, setAllList] = useState([])

    const clientId = "HV5h7QtkYL9s3BHx903z";
    const clientSecret = "LLJMu3rRAm";

    useEffect(() => {
        fetch(`/v1/search/shop?query=수영복&filter=used:false&sort=sim&display=100&start=1`, {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        })
            .then(response => response.json())
            .then(json => setAllList(json.items))

    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const productsFilter = () => {
        const filteredProducts = allList.filter(product => 
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setList(filteredProducts);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        productsFilter();
    };

    return (
        <Form inline="true" onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" style={{ paddingRight: 0 }}>
                    <Form.Control
                        type="text"
                        placeholder="검색어를 입력하세요"
                        style={{ marginRight: 0 }}
                        value={search}
                        onChange={handleChange}
                    />
                </Col>
                <Col xs="auto" style={{ paddingLeft: 0 }}>
                    <Button type="submit">확인</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default InputBox;
