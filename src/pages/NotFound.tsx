import { useEffect } from "react";
import { Link } from "react-router";
import { IFTheme } from "../services/interfaceGlobal";

import NotFoundImage from "../assets/images/notfound.png";
import "../assets/css/notfound.css";

export default function NotFound({ theme }:IFTheme) {
    useEffect(() => {
        document.title = "404 Not Found";
    }, []);

    return (
        <div className={"not-found-container " + (theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : ""))}>
            <img src={NotFoundImage} alt="not found" />
            <span>The page was not found.</span>
            <Link className="back-homepage" to="/blogs">Back to homepage</Link>
        </div>
    );
}