import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function insertionSort(array, compare) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && compare(array[j], current) > 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

function SortList({ list, setList }) {
    const [sortName, setSortName] = useState('정확도순');

    // 정확도순 정렬
    function accuracy() {
        const sortedList = insertionSort([...list], (a, b) => a.title.localeCompare(b.title));
        setList(sortedList);
        setSortName('정확도순');
    }

    // 가격 낮은순 정렬
    function priceUp() {
        const sortedList = insertionSort([...list], (a, b) => {
            return a.lprice - b.lprice || a.title.localeCompare(b.title);
        });
        setList(sortedList);
        setSortName('가격 낮은순');
    }
    
    // 가격 높은순 정렬
    function priceDown() {
        const sortedList = insertionSort([...list], (a, b) => {
            return b.lprice - a.lprice || b.title.localeCompare(a.title);
        });
        setList(sortedList);
        setSortName('가격 높은순');
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {sortName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={accuracy}>정확도순</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={priceUp}>가격 낮은순</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={priceDown}>가격 높은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SortList;














// import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// function SortList({ list, setList }) {
//     const [sortName, setSortName] = useState('정확도순');

//     // 정확도순 정렬: 이미 가져온 리스트를 초기 상태로 되돌리는 함수
//     function accuracy() {
//         setList(prevList => [...prevList].sort((a, b) => a.title.localeCompare(b.title)));
//         setSortName('정확도순');
//     }

//     // 가격 낮은순 정렬 함수
//     function priceUp() {
//         const sortedList = [...list].sort((a, b) => {
//             return a.lprice - b.lprice || a.title.localeCompare(b.title);
//         });
//         setList(sortedList);
//         setSortName('가격 낮은순');
//     }
    
//     // 가격 높은순 정렬 함수
//     function priceDown() {
//         const sortedList = [...list].sort((a, b) => {
//             return b.lprice - a.lprice || b.title.localeCompare(a.title);
//         });
//         setList(sortedList);
//         setSortName('가격 높은순');
//     }

//     return (
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 {sortName}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1" onClick={accuracy}>정확도순</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2" onClick={priceUp}>가격 낮은순</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3" onClick={priceDown}>가격 높은순</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

// export default SortList;
