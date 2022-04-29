import "../../styles/main.css"
import React from "react";
import {Link} from "react-router-dom";

const home = (props) => {
    return (
        <div className={"row"}>
            <div className={"col col-8 my-5"}>
                <div className={"candles-bg"}>dsf</div>
            </div>
            <div className={"col col-4 my-5"}>
                <div className={"card"}>
                    Добредојдовте на нашата веб апликација за продажба на свеќи
                    <Link to={"/info"}>Повеќе за восоците</Link>
                </div>
            </div>
        </div>
    )
}

export default home;