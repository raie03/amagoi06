import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <div className="logo">
            <h3>PORTFOLIO</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/works">Works</Link>
                </li>
                <li>
                    <a href="#">SNS</a>
                </li>
            </ul>
        </nav>
    </header>;
};

export default Header;