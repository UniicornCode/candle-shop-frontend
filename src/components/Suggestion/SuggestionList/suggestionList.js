import React from "react";
import {Link} from "react-router-dom";

const suggestionList = (props) => {

    return (
        <div className={"full-height row"}>
            <div className={"col-8 offset-2 mt-5"}>
                <table className={"table table-striped table-light table-responsive mt-5"}>
                    <thead>
                    <tr>
                        <th>Предлози за свеќи:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        props.suggestions.map((term) => {
                            return (<tr>
                                <td>{term.text}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
                <Link className={"float-end btn btn-darkcyan text-white"} to={"/suggestions/add"}>
                    Додади предлог
                </Link>
            </div>
        </div>
    )
}

export default suggestionList;