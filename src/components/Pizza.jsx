import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import mainstyles from './../css/main.module.css';
import { setPizzas } from '../store/pizza_reducer';
import ProductCard from './productCard'



const Pizza = () => {

    const dispatch = useDispatch()

    const isLoaded = useSelector(state => state.pizza.isLoaded)
    const pizza = useSelector(state => state.pizza.items)


    useEffect( () => {
        
            dispatch(setPizzas())
       
    }, [] )

    
    return (
        <div className={mainstyles.contentWrap}>
           
           { isLoaded ? 
                 pizza.map( item => {
                    return <ProductCard id={item.id} key={item.id} name={item.name} img={item.img} price={item.price} descr={item.descr} rating={item.rating}> </ProductCard>
                })
                :
                null
           }
            
        </div>
    );
};

export default Pizza;