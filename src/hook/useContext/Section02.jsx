import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function SecondSection() {
    const { isDark, setIsDark } = useContext(ThemeContext);
    console.log('모드:', isDark);

    return (
        <>
            <div
                className="content"
                style={{
                    backgroundColor: isDark ? '#333' : '#f0f0f0',
                    color: isDark ? '#fff' : '#333',
                }}
            >
                <h2>02</h2>
                <button onClick={() => setIsDark(!isDark)}>모드전환 버튼</button>
            </div>

        </>
    )
}

export default SecondSection