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
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                materials.push(options[i].value)
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
    }

    return (
        <div className="row py-5 full-height">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit} id={"addCandleForm"} name={"addCandleForm"}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder="Price"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Image URL</label>
                        <input type="text"
                               className="form-control"
                               id="imgUrl"
                               name="imgUrl"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor={"materialsInCandle"}>Materials</label>
                        <select name="materialsInCandle" className="form-control" multiple onChange={handleChange}>
                            {props.materials.map((term) =>
                                <option value={term.id}>{term.material}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CandleAdd;