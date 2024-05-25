

import Button from 'react-bootstrap/Button';

function PageNation({ setPageNum }) {
    const pageChange = (newPage) => {   
        setPageNum(newPage);
        window.scrollTo(0, 0)
    };

    return (
        <div>
            <Button className='button' as="input" type="button" value="1" onClick={() => pageChange(1)} />
            <Button className='button' as="input" type="button" value="2" onClick={() => pageChange(20)} />
            <Button className='button' as="input" type="button" value="3" onClick={() => pageChange(40)} />
            <Button className='button' as="input" type="button" value="4" onClick={() => pageChange(60)} />
            <Button className='button' as="input" type="button" value="5" onClick={() => pageChange(80)} />
        </div>
    )
}

export default PageNation