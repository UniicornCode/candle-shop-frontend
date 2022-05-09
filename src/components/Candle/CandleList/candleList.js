import "../../../styles/main.css"
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import ECandlesRepository from "../../../repository/eCandlesRepository";
import AuthService from "../../../sevices/auth.service";

class CandleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 3,
            candle: 0,
            currentUser: {}
        }

    }

    render () {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.candles.length / this.state.size);
        const candles = this.getCandlesPage(offset, nextPageOffset);

        return (
            <div>
                <div className={"row justify-content-center"}>
                    {candles}
                </div>

                <ReactPaginate
                    containerClassName="pagination justify-content-center"
                    breakClassName="page-item"
                    breakLabel={<a className="page-link font-darkcyan page-focus">...</a>}
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageClassName="page-item"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    pageLinkClassName="page-link font-darkcyan page-focus"
                    previousLinkClassName="page-link font-darkcyan page-focus"
                    nextLinkClassName="page-link font-darkcyan page-focus"
                    activeLinkClassName="btn-darkcyan"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                />

                {
                    this.state.currentUser.role === "ROLE_ADMIN" ?
                        <div className={"d-flex justify-content-end pb-5"}>
                            <Link className={"btn btn-darkcyan"} to={"/candles/add"}>Додади свеќа</Link>
                        </div> :
                        <div className={"d-flex justify-content-end pb-5"}></div>
                }
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    add = (candle) => {
        this.props.addToCart(candle)
        window.location.reload();
    }

    getCandlesPage = (offset, nextPageOffset) => {
        return this.props.candles.map((term) => {
            return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 card mx-4 my-5">
                    <img className="card-img-top mt-2 img-fluid" src={term.imgUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{term.name}</h5>
                        <span>Материјали: </span>
                        <ul>
                            {
                                term.materials.map((term) =>
                                    <li>{term.material}</li>
                                )
                            }
                        </ul>
                        <h6>{term.price} ден.</h6>
                        <button onClick={() => this.add(term.id)} className="btn btn-darkcyan float-end mt-auto">Додади во кошничка</button>
                        {this.check(term.id)}
                    </div>
                </div>
            )
        }).filter((candles, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    async componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            await this.setState({
                currentUser: user
            });
        }
    }

    check = (id) => {
        if (this.props.user.role === "ROLE_ADMIN") {
            return (
                <div className={"row d-block"}>
                    <div className={"col-6 float-end mt-3"}>
                        <Link className={"btn btn-danger"} to={"/candles"}
                              onClick={() => this.props.onDelete(id)}>Избриши</Link>
                    </div>
                    <div className={"col-5 float-end mt-3"}>
                        <Link className={"btn btn-info"}
                              onClick={() => this.props.onEdit(id)}
                              to={`/candles/edit/${id}`}>Промени</Link>
                    </div>
                </div>
            )
        }
    }
}

export default CandleList;