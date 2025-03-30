import { useState, useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { IFTheme } from "../services/interfaceGlobal";

export default function Footer({ theme }:IFTheme) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 796);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 796);
        };
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <footer
            style={{
                color: theme === "Dark" ? "#f9f9f9" : "gray",
                marginTop: "auto",
                height: "30px",
                borderTop: theme === "Dark" ? "1px solid #6c6c6c" : "1px solid #dedede",
                padding: "25px 15px",
                paddingBottom: "50px",
                backgroundColor: theme === "Dark" ? "#212121" : "#fdfdfd",
            }}
        >
            <div
                className="footer-content"
                style={{
                    width: isMobile ? "100%" : "70%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                }}
            >
                <i style={{ marginTop: "-2px" }}><FaRegCopyright size={15} /></i> 
                <span 
                    style={{
                        fontFamily: "Noto Sans Thai, sans-serif",
                        fontSize: "0.8rem",
                    }}
                >
                    Kanasanan Hanthongchai
                </span>
            </div>
        </footer>
    );
}