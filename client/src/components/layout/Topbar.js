import React from 'react';
import "../../styles/Topbar.css"
import { Link } from "react-router-dom";

const Topbar = ({ collapsed = false }) => {
    const handleLogout =  ()=> {
        sessionStorage.clear();
        window.location.replace("/login")
    }
    const role = sessionStorage.getItem("role");

    return (
        <header className={`app-topbar ${collapsed ? 'app-topbar-collapsed' : ''}`}>

            {/* LEFT */}
            <div className="app-topbar-left">
                <div className="app-topbar-brand">

                    <div className="app-topbar-logo">I2</div>

                    <Link
                        to={role === "founder" ? "/founder/dashboard" : "/freelancer/dashboard"}
                        className="app-topbar-title"
                    >
                        Idea2Team
                    </Link>

                </div>
            </div>

            {/* RIGHT */}
            <div className="app-topbar-right">

                {/* Notification */}
                <button className="app-topbar-btn">
                    🔔
                    <span className="app-topbar-dot"></span>
                </button>

                {/* Chat */}
                <button className="app-topbar-btn">
                    💬
                </button>

                {/* Logout */}
                <button className="app-topbar-logout" onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </header>
    );
};

export default Topbar;