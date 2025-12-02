// usecallback 
// 메모이제이션 역할 
// 특정 함수가 의존성 배열에 명시된 값이 변경될 때만 새로 생성되도록 함.
// 불필요한 함수 재생성 방지 


import { useState, useCallback, useMemo } from "react";
import Box from "./Box"


function UseCallback() {
    const [size, setSize] = useState(100);

    //모드 전환
    const [isDark, setisDark] = useState(false);

    // const boxStyle = () => {
    //     return {
    // //width: '100px',
    // //height: '100px', 
    //         width: `${size}px`,
    //         height: `${size}px`,
    //         backgroundColor: 'blue',
    //     }
    // }


    const boxStyle = useCallback(() => {
        return {
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'blue'
        };
    }, [size]);



    return (

        <div
            style={{
                backgroundColor: isDark ? 'black' : "#beeaff",
                padding: '20px',
            }}
        >
            {/* 모드전환 버튼 */}
            <button onClick={() => setisDark(!isDark)}>모드 전환</button>
            <button onClick={() => setSize(size + 10)}>박스 커짐</button>
            <button onClick={() => setSize(size - 10)}>박스 작아짐</button>

            <Box boxStyle={boxStyle} />

        </div>
    )
}

export default UseCallback

// useMemo는 값을 메모함
// useCallback 함수를 메모함