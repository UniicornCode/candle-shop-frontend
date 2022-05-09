import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Component} from "react";
import React from "react";
import ECandleRepository from "../../repository/eCandlesRepository";
import Home from "../Home/home"
import Header from "../Header/header"
import CandleList from "../Candle/CandleList/candleList"
import CandleAdd from "../Candle/CandleAdd/candleAdd"
import Login from "../UserAuthentication/Login/login";
import Register from "../UserAuthentication/Register/register";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import OrderList from "../Order/orderList";
import AuthService from "../../sevices/auth.service";
import EventBus from "../UserAuthentication/EventBus";
import ProtectedRoute from "../UserAuthentication/ProtectedRoute";
import SuggestionAdd from "../Suggestion/SuggestionAdd/suggestionAdd";
import SuggestionList from "../Suggestion/SuggestionList/suggestionList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candles: [],
            materials: [],
            roles: [],
            shoppingCart: [],
            orders: [],
            currentUser: undefined,
            suggestions: []
        }
    }

    render() {
        return (
            <Router>
                <Header user={this.state.currentUser}
                        logOut={this.logOut}/>
                <main>
                    <div className={"bg"}>
                        <div className={"container"}>
                            <Routes>
                                <Route exact path={"/"} element={
                                    <Home/>
                                }/>
                                <Route exact path={"/home"} element={
                                    <Home/>
                                }/>
                                <Route exact path={"/login"} element={
                                    <Login/>
                                } />
                                <Route exact path={"/register"} element={
                                    <Register roles={this.state.roles}
                                              onRegister={this.register}/>
                                }/>
                                <Route exact path={"/candles"} element={
                                    <ProtectedRoute>
                                        <CandleList candles={this.state.candles}
                                                    materials={this.state.materials}
                                                    addToCart={this.addToCart}/>
                                    </ProtectedRoute>
                                }/>
                                <Route exact path={"/candles/add"} element={
                                    <ProtectedRoute>
                                        <CandleAdd candles={this.state.candles}
                                                   materials={this.state.materials}
                                                   onAddCandle={this.addCandle}/>
                                    </ProtectedRoute>
                                }/>
                                <Route exact path={"/shopping-cart"} element={
                                    <ProtectedRoute>
                                        <ShoppingCart cart={this.state.shoppingCart}
                                                      onCreateOrder={this.createOrder}/>
                                    </ProtectedRoute>
                                }/>
                                <Route exact path={"/orders"} element={
                                    <ProtectedRoute>
                                        <OrderList orders={this.state.orders}/>
                                    </ProtectedRoute>
                                }/>
                                <Route exact path={"/suggestions"} element={
                                    <ProtectedRoute>
                                        <SuggestionList suggestions={this.state.suggestions}/>
                                    </ProtectedRoute>
                                }/>
                                <Route exact path={"/suggestions/add"} element={
                                    <ProtectedRoute>
                                        <SuggestionAdd onAddSuggestion={this.addSuggestion}/>
                                    </ProtectedRoute>
                                }/>
                            </Routes>
                        </div>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });

        this.loadCandles();
        this.loadMaterials();
        this.loadRoles();
        this.loadOrders();
        this.loadShoppingCart();
        this.loadSuggestions();
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            currentUser: undefined
        });
    }

    register(username, name, surname, password, role, address) {
        ECandleRepository.registerUser(username, name, surname, password, role, address)
            .then(() => {
            })
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

    loadRoles() {
        ECandleRepository.fetchRoles()
            .then((data) => {
                this.setState({
                    roles: data.data
                })
            })
    }

    loadShoppingCart() {
        ECandleRepository.fetchShoppingCart()
            .then((data) => {
                this.setState({
                    shoppingCart: data.data
                })
            })
    }

    loadOrders() {
        ECandleRepository.fetchOrders()
            .then((data) => {
                this.setState({
                    orders: data.data
                })
            })
    }

    loadSuggestions() {
        ECandleRepository.fetchSuggestions()
            .then((data) => {
                this.setState({
                    suggestions: data.data
                })
            })
    }

    createOrder() {
        ECandleRepository.createOrder()
            .then(() => {
                window.location.reload();
            });
    }

    addToCart(candle) {
        ECandleRepository.addToShoppingCart(candle)
            .then(() => {
                window.location.reload();
            });
    }

    addCandle(price, name, imgUrl, materials) {
        ECandleRepository.addCandle(price, name, imgUrl, materials)
            .then(() => {
                window.location.reload();
            });
    }

    addSuggestion(text) {
        ECandleRepository.addSuggestion(text)
            .then(() => {
                window.location.reload();
            })
    }
}

export default App;
