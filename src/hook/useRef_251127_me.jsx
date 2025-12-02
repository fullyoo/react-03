// useRef
// 컴포넌트에서 변경 가능한 값을 저장하고 관리할 수 있게 함

import { useState, useRef } from "react";

// useState와 useRef의 차이점
function Ref() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);


    // 카운트 함수
    const counter = () => {
        setCount(count + 1);
    }


    // console.log('카운트 되는 중..')

    // ref 증가
    const counterRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref 증가:", countRef.current);
    }

    return (
        <>
            {/* <h2>useRef</h2> */}

            <div>
                <p>count: {count} </p>
                <p>Ref: {countRef.current}</p>
                <button onClick={counter}>state 버튼</button>
                <button onClick={counterRef}>Ref 버튼</button>
            </div>


        </>
    )
}
export default Ref