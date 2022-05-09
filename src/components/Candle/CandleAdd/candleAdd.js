import "../../../styles/main.css"
import React from 'react';
import { useNavigate } from "react-router-dom";

const CandleAdd = (props) => {

    let navigate = useNavigate();
    const initialFormData = Object.freeze({
        name: "",
        price: 0,
        imgUrl: ""
    })
    const [formData, updateFormData] = React.useState(initialFormData)
    const [materialsInCandle, updateMaterialsInCandle] = React.useState([])

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        let options = e.target.options;
        let materials = [];
        if(options !== undefined) {
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    materials.push(options[i].value)
                }
            }
        }
        updateMaterialsInCandle(materials);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const price = formData.price;
        const imgUrl = formData.imgUrl;

        props.onAddCandle(price, name, imgUrl, materialsInCandle);
        navigate("/candles");
        window.location.reload();
    }

    return (
        <div className="row py-5 full-height">
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={onFormSubmit} id={"addCandleForm"} name={"addCandleForm"}>
                    <div className="form-group">
                        <label htmlFor="name" className={"mx-1"}>Име на свеќа</label>
                        <input type="text"
                               className="form-control my-2"
                               id="name"
                               name="name"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className={"mx-1"}>Цена</label>
                        <input type="text"
                               className="form-control my-2"
                               id="price"
                               name="price"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl" className={"mx-1"}>URL од слика</label>
                        <input type="text"
                               className="form-control my-2"
                               id="imgUrl"
                               name="imgUrl"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor={"materialsInCandle"} className={"mx-1"}>Материјали</label>
                        <select name="materialsInCandle" className="form-control my-2" multiple onChange={handleChange}>
                            {props.materials.map((term) =>
                                <option value={term.id}>{term.material}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-darkcyan my-3">Додади</button>
                </form>
            </div>
        </div>
    )
}

export default CandleAdd;