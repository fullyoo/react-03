// useRef
// 컴포넌트에서 변경 가능한 값을 저장하고 관리할 수 있게 함

import { useState, useRef } from "react";

// useState와 useRef의 차이점
function Ref() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    // state 증가(카운트 함수)
    const handleState = () => {
        setCount(count + 1);
    }

    // console.log('카운트 되는 중..')

    // ref 증가
    const handleRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref 증가:", countRef.current);
    }

    // ref 객체는 current라는 프로페트를 가지고 있으며, 실제로 우리가 저장하고자 하는 값을 담고있음.
    // 떄문에 해당값에 접근하거나 변경할 때는 useRef.current 형태로 접근해야한다.

    return (
        <>
            <div>
                <p>count (state): {count}</p>
                <p>Ref (ref): {countRef.current}</p>

                <button onClick={handleState}>state 버튼</button>
                <button onClick={handleRef}>Ref 버튼</button>
            </div>
        </>
    )
}

export default Ref;
