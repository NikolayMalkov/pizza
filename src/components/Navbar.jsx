import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import mainstyles from './../css/main.module.css'
import { Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';





const Navbar = () => {

    const useStyles = makeStyles({
        root: {
            fontFamily: 'Play'
        },
    });

    const classes = useStyles()

    const totalPrice = useSelector(state => state.shopcart.totalPrice)


    return (
        <div>
            <div className={mainstyles.nav}>
                <Link to="/">
                    <div>
                        <Typography variant="h1" component="h2" className={classes.root}>
                            NightPizza
                        </Typography>
                    </div>
                </Link>

                <div>
                    <Typography variant="h3" component="h3" style={{ color: 'black' }} className={classes.root}>
                        Доставка: 70-00-00
                    </Typography>
                    <Typography variant="h4" component="h4" style={{ marginLeft: 30 }} className={classes.root}>
                        лучшая пицца в Найт-Сити
                    </Typography>
                </div>

                <Link to="/cart">
                    <div className={mainstyles.shopcart}>
                        <ShoppingCartIcon style={{ color: "black" }} fontSize='large' />
                        <div>
                            {totalPrice}
                        </div>

                    </div>
                </Link>
            </div>

            <div className={mainstyles.links}>
                <ul>
                    <li><Link to="/pizza">Пицца</Link></li>
                    <li><Link to="/burgers">Бургеры</Link></li>
                    <li><Link to="/sushi">Суши</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;