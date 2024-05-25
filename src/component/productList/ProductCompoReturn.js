import SortButton from "./SortButton";
import GetProductList from "./GetProductList";
import { useState } from "react";
import InputBox from "./InputBox";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SortList from "./SortList";
import PageNation from "./PageNation";
import './ProductCompoReturn.css'


function ProductCompoReturn({ list, setList }) {

    const [sortNum, setSortNum] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const [priceSort, setPriceSort] = useState('sim');



    return (

        <div>
            <div className="button-group">
                <ButtonGroup className="justify-content-end">
                    <div className="sort-button">
                        <SortButton setPriceSort={setPriceSort} setSortNum={setSortNum} />
                    </div>

                    <div className="sort-list">
                        <SortList list={list} setList={setList} />
                    </div>
                    <InputBox list={list} setList={setList} />
                </ButtonGroup>
            </div>
            <GetProductList
                list={list}
                setList={setList}
                sortNum={sortNum}
                pageNum={pageNum}
                priceSort={priceSort}
            />
            <div className="page-nation">
                <PageNation setPageNum={setPageNum} />
            </div>
        </div>
    );
}

export default ProductCompoReturn;
