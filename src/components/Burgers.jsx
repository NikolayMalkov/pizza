import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setBurgers } from '../store/burgers_reducer';
import ProductCard from './productCard';
import mainstyles from './../css/main.module.css'

const Burgers = () => {
    const dispatch = useDispatch()

    const isLoaded = useSelector(state => state.burgers.isLoaded)
    const burgers = useSelector(state => state.burgers.items)




    useEffect( () => {
        
            dispatch(setBurgers())
       
    }, [] )

    
    return (
        <div className={mainstyles.contentWrap}>
           
           { isLoaded ? 
                 burgers.map( item => {
                    return <ProductCard id={item.id} key={item.id} name={item.name} img={item.img} price={item.price} descr={item.descr} rating={item.rating}> </ProductCard>
                })
                :
                null
           }
            
        </div>
    );
};

export default Burgers;