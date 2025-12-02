// useCallback
// 메모이제이션 역할, 특정 함수가 의존성 배열에 명시된 값이 변경될 때만 새로 생성되도록 함.
// 불필요한 함수 재생성을 방지

import { useCallback, useState } from "react";
import Box from "./Box";

function UseCallback() {
    const [size, setSize] = useState(100);


    // 기존 boxStyle 함수 형태 유지 + useCallback만 입힘
    const boxStyle = useCallback(() => {
        return {
            // width: '100px',
            // height: '100px', 

            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'blue'
        };
    }, [size]);

    return (
        <>
            <h2>UseCallback</h2>
            <button onClick={() => setSize(size + 10)}>박스 커짐</button>
            <button onClick={() => setSize(size - 10)}>박스 작아짐</button>
            <Box boxStyle={boxStyle} />
        </>
    );
}

export default UseCallback;
