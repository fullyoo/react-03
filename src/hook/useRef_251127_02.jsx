// useRef
// 컴포넌트에서 변경 가능한 값을 저장하고 관리할 수 있게 함

import { useState, useRef } from "react";

function Ref() {
    // 1. useState와 useRef의 차이점
    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);

    // // state 증가(카운트 함수)
    // const handleState = () => {
    //     setCount(count + 1);
    // }

    // // console.log('카운트 되는 중..')

    // // ref 증가
    // const handleRef = () => {
    //     countRef.current = countRef.current + 1;
    //     console.log("ref 증가:", countRef.current);
    // }

    // ref 객체는 current라는 프로페트를 가지고 있으며, 실제로 우리가 저장하고자 하는 값을 담고있음.
    // 떄문에 해당값에 접근하거나 변경할 때는 useRef.current 형태로 접근해야한다.

    // return (
    //     <>
    //         <div>
    //             <p>count (state): {count}</p>
    //             <p>Ref (ref): {countRef.current}</p>

    //             <button onClick={handleState}>state 버튼</button>
    //             <button onClick={handleRef}>Ref 버튼</button>
    //         </div>
    //     </>
    // )


    // 2. useRef와 변수 차이점
    // ref는 랜더링 될때마다 랜더링 된 이후에도 값이 유지됨
    // 변수는 랜더링 될때마다 초기화됨
    // 이유는 useRef는 리액트에서 관리하는 객체임. 때문에 값이 변경되도컴포넌트가 다시 랜더링 되지 않고 값을 유지함.

    const countRef = useRef(0);
    let countVar = 0;
    const [render, setRender] = useState(0); // 강제 렌더링용

    const handleRef = () => {
        // countRef.current += 1;
        countRef.current = countRef.current + 1;
        console.log("Ref:", countRef.current);
        // setRender((prev) => prev + 1); // 화면 갱신
    };

    const handleVar = () => {
        // countVar += 1;
        countVar = countVar + 1;
        console.log("Var:", countVar);
        // setRender((prev) => prev + 1); // 화면 갱신해도 countVar는 항상 0으로 초기화됨
    };

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={() => { setRender(render + 1) }}>랜더링</button>
            <button onClick={handleRef}>Ref 카운트</button>
            <button onClick={handleVar}>Var 카운트</button>
        </div>
    );
}


export default Ref;
