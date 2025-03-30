import {
    BsSun,
    BsFillMoonStarsFill,
    BsList
} from "react-icons/bs";
import { Link } from "react-router";
import { IFTheme } from "../services/interfaceGlobal";

import "../assets/css/topbar.css";
import Logo from "../assets/images/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Topbar({ theme, setTheme }:IFTheme) {
    return (
        <header className={theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : "") }>
            <div className="left-options">
                <Link className="logo" to="/blogs">
                    <img src={Logo} alt="logo" />
                    <span>Kanasanan</span>
                </Link>
            </div>
            <div className="right-options">
                <ul>
                    <li><Link to="/blogs">Blogs</Link></li>
                    {/* <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li> */}
                </ul>
                {theme === "Light" && (
                    <i
                        className="topbar-icon"
                        onClick={() => setTheme("Dark")}
                    >
                        <BsSun size={23} />
                    </i>
                )}
                {theme === "Dark" && (
                    <i
                        className="topbar-icon"
                        onClick={() => setTheme("Light")}
                    >
                        <BsFillMoonStarsFill size={23} />
                    </i>
                )}
                <i className="ham-icon"><BsList size={23} /></i>
            </div>
        </header>
    );
}