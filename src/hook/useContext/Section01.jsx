
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function FirstSection() {
    const { isDark } = useContext(ThemeContext);
    console.log('모드:', isDark);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? '#f0f0f0' : '#333',
                color: isDark ? '#333' : '#fff',
            }}
        >
            <h2>01</h2>
        </div>
    );
}

export default FirstSection;
