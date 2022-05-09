import React from "react";
import AuthService from "../../../sevices/auth.service";
import {useNavigate} from "react-router-dom";

const suggestionAdd = (props) => {

    const initialData = Object.freeze({
        text: ""
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
        const suggestion = data.suggestion;
        props.onAddSuggestion(suggestion);
        navigate("/suggestions");
        window.location.reload();
    }

    return (
        <div className={"full-height row"}>
            <div className={"col-6 offset-3 mt-5"}>
                <form className={"mt-5"} onSubmit={handleLogin}>
                    <div className={"form-group"}>
                        <label htmlFor={"suggestion"} className={"m-2"}>Предлог за свеќа</label>
                        <input type={"text"}
                               id={"suggestion"}
                               name={"suggestion"}
                               className={"form-control"}
                               placeholder={"Напишете ваш предлог за свеќа.."}
                               onChange={handleChange}
                        />
                    </div>
                    <button type={"submit"} className={"btn btn-darkcyan float-end my-3"}>Додади</button>
                </form>
            </div>
        </div>
    )
}

export default suggestionAdd;