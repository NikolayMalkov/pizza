import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import mainstyles from './../css/main.module.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { removeFromCart } from '../store/shopcart_reducer';
import { useDispatch } from 'react-redux';
import CartForm from './CartForm';

const ShopCart = () => {

    const items = useSelector(state => state.shopcart.items);



    const ShopCartItem = ({ id, name, price }) => {


        const dispatch = useDispatch();

        function remove(id, price) {
            dispatch(removeFromCart(id, price))
        }


        return (
            <li>
                <div className={mainstyles.orderwrap}>
                    <div>
                        Название: {name}
                    </div>
                    <div>
                        Цена: {price}
                    </div>
                    <div>
                        <HighlightOffIcon onClick={() => remove(id, price)} />
                    </div>
                </div>
            </li>
        )
    }



    return (
        <div>
            <Container>

                <ul className={mainstyles.orders}>
                    {items.map((item) => {
                        return (
                            <ShopCartItem id={item.id} key={item.id} name={item.name} price={item.price} className={mainstyles.orderItem}>
                            </ShopCartItem>
                        )
                    })}
                </ul>

                <CartForm />

            </Container>
        </div>
    );
};

export default ShopCart;