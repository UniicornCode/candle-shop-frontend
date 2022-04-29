import "../../styles/main.css"
import React from 'react';
import {Link} from "react-router-dom";

const header = (props) => {
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

                        <li className="nav-item mx-1">
                            <Link className="btn btn-light btn-sm ml-3" to={"/candles"}>
                                Свеќи
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="btn btn-light btn-sm ml-3" to={"/shopping-cart"}>
                                Кошничка
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="btn btn-light btn-sm ml-3" to={"/orders"}>
                                Нарачки
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="btn btn-light btn-sm ml-3" to={"/suggestions"}>
                                Предлози
                            </Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="btn btn-light btn-sm ml-3 card" to={"/logout"}>
                                <i className="fa fa-shopping-cart"></i> Одјава
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default header;