import "../../../styles/main.css"
import React from 'react';
import {useNavigate} from "react-router-dom";

const CandleEdit = (props) => {

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
        if (options !== undefined) {
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
        const name = formData.name !== "" ? formData.name : props.selectedCandle.name;
        const price = formData.price !== 0 ? formData.price : props.selectedCandle.price;
        const imgUrl = formData.imgUrl !== "" ? formData.imgUrl : props.selectedCandle.imgUrl;

        props.onEditCandle(props.selectedCandle.id, name, price, imgUrl, materialsInCandle);
        navigate("/candles");
    }

    const selectedMaterials = async () => {
        const array = await props.selectedCandle;
        console.log(array)
        props.materials.map((term) => {
            array.forEach(element => {
                if (element.id === term.id) {
                    return <option selected={element.id}
                                   value={term.id}>{term.material}</option>
                } else return <option value={term.id}>{term.material}</option>
            })
        })
    }

    return (
        <div className="row py-5 full-height">
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={onFormSubmit} id={"editCandleForm"} name={"editCandleForm"}>
                    <div className="form-group">
                        <label htmlFor="name" className={"mx-1"}>Име на свеќа</label>
                        <input type="text"
                               className="form-control my-2"
                               id="name"
                               name="name"
                               placeholder={props.selectedCandle.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className={"mx-1"}>Цена</label>
                        <input type="text"
                               className="form-control my-2"
                               id="price"
                               name="price"
                               placeholder={props.selectedCandle.price}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl" className={"mx-1"}>URL од слика</label>
                        <input type="text"
                               className="form-control my-2"
                               id="imgUrl"
                               name="imgUrl"
                               placeholder={props.selectedCandle.imgUrl}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor={"materialsInCandle"} className={"mx-1"}>Материјали</label>
                        <select name="materialsInCandle" className="form-control my-2" multiple onChange={handleChange}>
                            {selectedMaterials}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-darkcyan my-3">Промени</button>
                </form>
            </div>
        </div>
    )
}

export default CandleEdit;