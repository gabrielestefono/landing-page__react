import React from 'react';
import logo from '../img/logo.svg';
import style from '../styles/header.module.css';

export default ()=>{
    return (
        <>
            <header className={style.header}>
                <nav>
                    <img src={logo} className={style.headerNavbarImg}/>
                </nav>
            </header>
        </>
    )
}