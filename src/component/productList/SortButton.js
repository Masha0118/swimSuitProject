
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';



function SortButton({setSortNum}) {


    const [currentSort, setCurrentSort] = useState('네개씩 보기')

    const sortChange = (newSortNum, newSortName) => {
        setSortNum(newSortNum);
        setCurrentSort(newSortName);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentSort}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => sortChange(4, '네개씩 보기')}>네개씩 보기</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => sortChange(3, '세개씩 보기')}>세개씩 보기</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => sortChange(2, '두개씩 보기')}>두개씩 보기</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
    
}

export default SortButton;