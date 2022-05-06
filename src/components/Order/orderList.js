import React from "react";

const orderList = (props) => {
    return (
        <div className={"full-height row"}>
            <div className={"col-8 offset-2 mt-5"}>
                <table className={"table table-striped table-light table-responsive mt-5"}>
                    <thead>
                    <tr>
                        <th>Број на нарачка:</th>
                        <th>Свеќи:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        props.orders.map((term) => {
                            return (<tr>
                                <td>{term.id}</td>
                                <td>
                                {term.candles.map((c) => {
                                    return <div>{c.name}</div>
                                })}
                                </td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default orderList;