import {Link, useNavigate} from "react-router-dom";
import React from "react";

const Register = (props) => {

    let navigate = useNavigate();
    const initialFormData = Object.freeze({
        username: "",
        name: "",
        surname: "",
        password: "",
        role: "",
        address: ""
    })
    const [formData, updateFormData] = React.useState(initialFormData)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const name = formData.name;
        const surname = formData.surname;
        const password = formData.password;
        const role = formData.role !== "" ? formData.role : "ROLE_USER";
        const address = formData.address;

        props.onRegister(username, name, surname, password, role, address);
        navigate("/candles");
    }

    return (
        <div className="row py-5 full-height">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} id={"registerForm"} name={"registerForm"}>
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input type="text"
                               id="username"
                               name={"username"}
                               required
                               className="form-control"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="text"
                               id="name"
                               name={"name"}
                               required
                               className="form-control"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="surname">Surname</label>
                        <input type="text"
                               id="surname"
                               name={"surname"}
                               required
                               className="form-control"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name={"password"}
                               required
                               className="form-control"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor={"role"}>Roles</label>
                        <select name={"role"} className="form-control" required onChange={handleChange}>
                            {props.roles.map((term) =>
                                <option value={term.valueOf()}>{term.valueOf()}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input type="text"
                               id="address"
                               name={"address"}
                               required
                               className="form-control"
                               onChange={handleChange}
                        />
                    </div>

                    <button type="button" id="submit" onClick={onFormSubmit} className="btn btn-primary mb-4">
                        Register</button>

                    <div className="text-center">
                        <p>Already a member? <Link to={"/login"}>Sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;