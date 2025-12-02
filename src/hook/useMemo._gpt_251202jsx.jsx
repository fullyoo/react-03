import { useMemo, useState } from "react";

function calculate(num) {
    console.log('느린 연산 진행중...');
    // 느린 연산 시뮬레이션
    let result = num;
    for (let i = 0; i < 500000000; i++) {
        result = num + 10000;
    }
    return result;
}

function calculate02(num) {
    console.log('빠른 연산 진행중...');
    return num + 1;
}

function UseMemo() {
    const [number, setNumber] = useState(1);
    const [Eznumber, setEzNumber] = useState(1);

    // 느린 연산 → useMemo로 최적화
    const sum = useMemo(() => {
        return calculate(number);
    }, [number]);

    // 빠른 연산 → 그냥 바로 계산
    const sum02 = calculate02(Eznumber);

    return (
        <>
            <div>
                <h2>느린 계산기</h2>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <span> +10000 = {sum}</span>

                <h2>빠른 계산기</h2>
                <input
                    type="number"
                    value={Eznumber}
                    onChange={(e) => setEzNumber(parseInt(e.target.value))}
                />
                <span> +1 = {sum02}</span>
            </div>
        </>
    );
}

export default UseMemo;
