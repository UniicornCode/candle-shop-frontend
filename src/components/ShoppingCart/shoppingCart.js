import React from "react";
import {useNavigate} from "react-router-dom";

const shoppingCart = (props) => {

    let navigate = useNavigate();

    const createOrder = () => {
        props.onCreateOrder();
        // window.location.reload();
        // navigate("/orders");
    }

    return (
        <div className={"full-height row"}>
            <div className={"col-6 offset-3 mt-5"}>
                <table className={"table table-striped table-light table-responsive mt-5"}>
                    <thead>
                    <tr>
                        <th>Свеќи во кошничка:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.cart.map((term) => {
                            return (<tr>
                                <td>{term.name}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
                <button className={"btn btn-darkcyan float-end my-3"}
                    onClick={createOrder}>Креирај нарачка</button>
            </div>
        </div>
    )
}

export default shoppingCart;