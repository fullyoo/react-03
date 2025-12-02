
// 리액트 훅이란?
// 리액트 컴포넌트에서 상태관리 및 생명주기 기능을 사용할 수 있게 해주는 특수한 함수
// 쉽게 말하면 컴포넌트에서 리액트 기능을 연결 할 수 있게 해주는 특별한 함수

// Hook 사용규칙
// 1. 최상위에서만 호출할 것.
// 2. 리액트 함수 컴포넌트 또는 커스텀 훅 내에서만 호출

//=========================================================

// useEffect 란?
// 화면에 첫 랜더링 되었을 때(마운트)
// 다시 랜더링 될 때 (업데이트)
// 화면에서 사라질 때(언마운트)
// 특정 작업을 처리할 코드를 실행시켜주고 싶을 때

import { useState, useEffect } from "react";


function Effect() {

    // 카운트 변수 및 카운트 함수
    const [count, setCount] = useState(0);
    const counter = () => { setCount(count + 1); };

    // 이름 입력 변수, 함수
    const [name, setName] = useState("");
    const handleInput = (e) => {
        setName(e.target.value)
    }


    useEffect(() => {
        console.log('핼로')
    }, []);
    // [](빈 배열) = “처음 렌더링 때 딱 1번만 실행해라”

    useEffect(() => {
        console.log('이름 바뀜');
    }, [name]);
    // [name], [count]=[변수값] 특정값이 변경될 때 마다 실행



    //  타이머 변수 및 함수(cleanUp 함수 사용)
    const [showTimer, setShowTimer] = useState(false);
    const handleTimer = () => { setShowTimer(!showTimer) }

    //타이머
    const Timer = () => {

        useEffect(() => {
            const timer = setInterval(() => {
                console.log('타이머 돌아감 ing..');
            }, 1000);

            return () => {
                clearInterval(timer);
                console.log('멈춰');
            }

        }, []) // [] 빈 배열을 넣어줘야 타이머가 한개만 생성

        return (
            <div>
                <p>타이머 시작</p>
            </div>
        )
    }

    return (

        <>
            {/* <h2>useEffect</h2> */}
            <div>
                <span>count:{count} </span>
                {/* <button onClick={() => setCount(count + 1)}>카운트</button> */}
                <button onClick={counter}>카운트</button>
            </div>

            <br /><br />

            <div>
                <input type="text" placeholder="이름을 입력해 주세요" value={name} onChange={handleInput} />
                <p>이름: {name}</p>
            </div>

            <br /><br />
            {/* showTimer가 true 일때만 Timer 컴포넌트를 보여줘! */}
            {showTimer && <Timer />}
            <button onClick={handleTimer}>타이머 버튼</button>



        </>
    )
}
export default Effect