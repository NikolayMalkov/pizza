import React from 'react';
import mainstyles from './../css/main.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Pizza from './Pizza'
import Burgers from './Burgers'
import Sushi from './Sushi'
import ShopCart from './ShopCart';

const Main = () => {
    return (
        <div className={mainstyles.main}>
             <Switch>
                <Route exact path="/">
                    <Pizza />
                </Route>
                <Route exact path="/pizza">
                    <Pizza />
                </Route>
                <Route path="/burgers">
                    <Burgers />
                </Route>
                <Route path="/sushi">
                    <Sushi />
                </Route>
                <Route exact path="/cart">
                    <ShopCart />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;