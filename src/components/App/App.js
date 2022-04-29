import logo from '../../logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Component} from "react";
import React from "react";
import ECandleRepository from "../../repository/eCandlesRepository";
import Home from "../Home/home"
import Header from "../Header/header"
import CandleList from "../Candle/CandleList/candleList"
import CandleAdd from "../Candle/CandleAdd/candleAdd"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candles: [],
            materials: [],
            cart: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"bg"}>
                        <div className={"container"}>
                            <Routes>
                                <Route exact path={"/home"} element={
                                    <Home/>
                                }/>
                                <Route exact path={"/candles"} element={
                                    <CandleList candles={this.state.candles}
                                                materials={this.state.materials}
                                    />
                                }/>
                                <Route exact path={"/candles/add"} element={
                                    <CandleAdd candles={this.state.candles}
                                               materials={this.state.materials}
                                               onAddCandle={this.addCandle}
                                    />
                                }/>
                            </Routes>
                        </div>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadCandles();
        this.loadMaterials();
    }

    loadCandles() {
        ECandleRepository.fetchCandles()
            .then((data) => {
                this.setState({
                    candles: data.data
                })
            })
    }

    loadMaterials() {
        ECandleRepository.fetchMaterials()
            .then((data) => {
                this.setState({
                    materials: data.data
                })
            })
    }

    addCandle(price, name, imgUrl, materials) {
        ECandleRepository.addCandle(price, name, imgUrl, materials)
            .then(() => {
                this.loadCandles();
            })
    }
}

export default App;
