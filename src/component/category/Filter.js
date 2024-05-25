import Category from "./Category";
import Get from "./Get";


function Filter({list, setList}) {
    return (
        <>
            <Category list={list} setList={setList}/>
            <Get list={list} setList={setList}/>
        </>
    );
}

export default Filter;
