import React from "react";
import { Link } from 'react-router-dom'

export const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src="/assets/images/logo/logo-black.png" alt="Falmata Dawano"/>
        </Link>
    </div>
)

