import React from "react";

function Box({ boxStyle }) {
    console.log("📦 Box 렌더링됨!");

    return (
        <>
            <div style={boxStyle()}></div>
        </>
    );
}

export default React.memo(Box);
