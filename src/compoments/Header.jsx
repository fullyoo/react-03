import { useNavigate, Link, NavLink } from "react-router-dom";

function Header() {

    //1. useNavigate
    // const navigate = useNavigate();  // 소문자로 사용 추천!

    // 2. <Link></Link> 컴포넌트 사용
    // 3. <NavLink></NavLink> 컴포넌트 사용

    return (
        <header>
            {/* //1. useNavigate */}
            {/* <ul>
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/about')}>About</li>
                <li onClick={() => navigate('/contact')}>Contact</li>
            </ul> */}


            {/* //2. <Link></Link> 컴포넌트 사용 */}
            {/* <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul> */}


            {/* //3. <NavLink></NavLink> 컴포넌트 사용 */}
            <ul>
                <li><NavLink
                    to="/"
                    // className={({ isActive }) => (isActive ? 'on' : '')}
                    // return을 넣었을 때 형식
                    className={({ isActive }) => { return isActive ? 'on' : ''; }}
                >
                    Home
                </NavLink></li>

                <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'on' : '')}>About</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => (isActive ? 'on' : '')}>Contact</NavLink></li>
            </ul>
        </header >
    );
}

export default Header;
