import React from 'react';
import './Header.css';
import logo from '../../assets/netflix-logo.png';
import avatar from '../../assets/netflix-avatar.png';


const header = ({black}) => {
    return (
        <header className={black?'backBlack':''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={avatar} alt="Usuário" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default header;