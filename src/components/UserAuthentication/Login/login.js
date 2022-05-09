import React, {Component} from "react";
import {Link, useNavigate} from "react-router-dom";

import AuthService from "../../../sevices/auth.service";

const Login = (props) => {

    const initialData = Object.freeze({
        username: "",
        password: ""
    });

    const [data, updateData] = React.useState(initialData);

    let navigate = useNavigate();

    const handleChange = (e) => {
        updateData({
            ...data,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(data.username, data.password).then(
            () => {
                navigate("/candles");
                window.location.reload();
            }
        );
    }

    return (
        <div className={"row p-5 full-height"}>
            <div className="col col-md-6 offset-3 p-5">
                <div className="">
                    <form onSubmit={handleLogin}>
                        <h2 className={"m-3 p-2 text-center"}>Најави се</h2>
                        <div className="form-group w-75 m-auto my-2">
                            <label htmlFor="username">Корисничко име</label>
                            <input
                                type="text"
                                className="form-control my-2"
                                name="username"
                                id="username"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group w-75 m-auto my-2">
                            <label htmlFor="password">Лозинка</label>
                            <input
                                type="password"
                                className="form-control my-2"
                                name="password"
                                id="password"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group m-auto text-center">
                            <button className="btn btn-darkcyan w-50 mt-4" type={"submit"} id="submit">
                                <span>Најави се</span>
                            </button>
                        </div>
                        <div className="form-group">
                            <div className={"row w-75 m-auto text-center mb-3"}>
                            <span className={"mt-4 col"}>Не сте корисник?</span>
                            <Link to={"/register"} className={"btn btn-darkcyan w-25 m-3 col"}>
                                <span>Регистрирај се</span>
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;