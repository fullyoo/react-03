import { useNavigate, Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>풋터영역

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>


        </footer>
    )

}

export default Footer