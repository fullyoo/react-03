// useMemo 란
// 메모이제이션 :
// 동일한 값을 리턴하는 함수를 반복 호출할 때, 이전에 계산된 값을 저장을 해두고
// 필요할때 마다 또 다시 계산하지 않고 메모리에서 꺼내서 재사용하는 기법
// 쉽게 말해 맨처음에 랜더링 할때 캐싱해두고, 그 값이 필요할 때마다 캐시해서 꺼내서 사용함


import { useEffect, useMemo, useState } from "react";

function calculate(num) {
    console.log('연산 진행중...');
    for (let i = 0; i < 1000000000; i++) { // 복잡한 연산 시물레이션
        return num + 10000;
    }
}

function calculate02(num) {
    console.log('빠른 연산 진행중...');
    for (let i = 0; i < 1000000000; i++) { // 복잡한 연산 시물레이션
        return num + 1;
    }
}


function UseMemo() {
    // const [number, setNumber] = useState(1);
    const [Eznumber, setEzNumber] = useState(1);
    const [isCheolsoo, setIsCheolsoo] = useState(true);

    // const sum = calculate(number);   

    // const sum = useMemo(() => {
    //     return calculate(number)
    // }, [number]);


    const sum02 = calculate02(Eznumber);

    // const student = {
    //     name: isCheolsoo ? '철수' : '영희'
    // }

    const student = useMemo(() => {
        console.log('학생정보 객체 만듬!');
        return {
            name: isCheolsoo ? '철수' : '영희'
        }
    }, [isCheolsoo]);


    useEffect(() => {
        console.log('학생이름이 변경됨', student.name);
    }, [student])



    return (
        <>
            <div>
                {/* <h2>느린 계산기</h2>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <span> +10000 = {sum}</span> */}

                <h2>빠른 계산기</h2>
                <input
                    type="number"
                    value={Eznumber}
                    onChange={(e) => setEzNumber(parseInt(e.target.value))}
                />
                <span> +1 = {sum02}</span>
            </div>

            <br /><br />

            <div>
                <h2>학생 이름</h2>
                <div>
                    <p>이름: {student.name}</p>
                    <button onClick={() => setIsCheolsoo(!isCheolsoo)}>이름 변경</button>
                </div>


            </div>
        </>
    )
}

export default UseMemo