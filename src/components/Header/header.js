import "../../styles/main.css"
import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

const header = (props) => {

    const logOut = () => {
        props.logOut();
    }

    const check = () => {
        if (props.user !== undefined) {
            return <div className={"mt-1 mx-3"}>Корисник: <span className={"fw-bold font-darksalmon"}>{props.user.username}</span></div>
        }
    }

    const login_logout = () => {
        if (props.user !== undefined) {
            return (
                <span>Одјава</span>
            )
        } else {
            return  (
                <span>Најави се</span>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-md bg-darkcyan">
            <div className="container">
                <Link className="navbar-brand font-darksalmon" to={"/home"}><b>Свеќара</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">

                    <ul className="nav navbar-nav navbar-right">

                        <li className={"nav-item mx-1 text-white"}>
                            {check()}
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={({ isActive }) =>
                                    (isActive ? 'btn btn-darksalmon-active btn-sm ml-3' :
                                    'btn btn-darksalmon btn-sm ml-3')}
                                     to={"/candles"}>
                                Свеќи
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={({ isActive }) =>
                                    (isActive ? 'btn btn-darksalmon-active btn-sm ml-3' :
                                    'btn btn-darksalmon btn-sm ml-3')}
                                     to={"/shopping-cart"}>
                                Кошничка
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={({ isActive }) =>
                                    (isActive ? 'btn btn-darksalmon-active btn-sm ml-3' :
                                    'btn btn-darksalmon btn-sm ml-3')}
                                     to={"/orders"}>
                                Нарачки
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={({ isActive }) =>
                                    (isActive ? 'btn btn-darksalmon-active btn-sm ml-3' :
                                    'btn btn-darksalmon btn-sm ml-3')}
                                     to={"/suggestions"}>
                                Предлози
                            </NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className={({ isActive }) =>
                                    (isActive ? 'btn btn-darksalmon-active btn-sm ml-3' :
                                    'btn btn-darksalmon btn-sm ml-3')}
                                     to="/login" onClick={logOut}>
                                {login_logout()}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default header;