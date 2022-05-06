import "../../styles/main.css"
import React from "react";
import {Link} from "react-router-dom";

const home = (props) => {

    return (
        <div className={"row"}>
            <div className={"col col-8 my-5"}>
                <div className={"candles-bg"}></div>
            </div>
            <div className={"col col-3 offset-1 my-5 align-self-center "}>
                <div className="card text-white bg-darkcyan mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Добредојдовте на нашата веб апликација за продажба на свеќи</h5>
                        <hr/>
                        <p className="card-text">Нашите свеќи се изработени од најквалитетните восоци со многу внимание
                            и љубов, со цел да задоволат сечиј вкус</p>
                    </div>
                </div>
                <div className={"salmon"}>
                    <Link className={"text-white float-end btn btn-primary bg-darkcyan mb-3"} to={"/register"}>
                        <h5>Регистрирај се</h5></Link>
                </div>
                <div className={"salmon"}>
                    <Link className={"text-white float-end btn btn-primary bg-darkcyan mb-3"} to={"/login"}>
                        <h5>Најави се</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default home;