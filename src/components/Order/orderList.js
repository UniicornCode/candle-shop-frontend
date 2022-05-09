import React from "react";

const orderList = (props) => {

    let sum = 0;

    const sumPrice = (price) => {
        sum += price;
    }

    return (
        <div className={"full-height row"}>
            <div className={"col-8 offset-2 mt-5"}>
                <table className={"table table-striped table-light table-responsive mt-5"}>
                    <thead>
                    <tr>
                        <th>Број на нарачка:</th>
                        <th>Свеќи:</th>
                        <th>Поединечна цена:</th>
                        <th>Вкупна цена:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        props.orders.map((term) => {
                            sum = 0
                            return (<tr>
                                <td>{term.id}</td>
                                <td>
                                    {term.candles.map((c) => {
                                        return <div>{c.name}</div>
                                    })}
                                </td>
                                <td>
                                    {term.candles.map((c) => {
                                        sumPrice(c.price)
                                        return <div>{c.price}</div>
                                    })}
                                </td>
                                <td>
                                    {sum}
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