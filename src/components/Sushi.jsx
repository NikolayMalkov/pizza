import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSushi } from '../store/sushi_reducer';
import ProductCard from './productCard';
import mainstyles from './../css/main.module.css'

const Sushi = () => {
    const dispatch = useDispatch()

    const isLoaded = useSelector(state => state.sushi.isLoaded)
    const sushi = useSelector(state => state.sushi.items)




    useEffect( () => {
        
            dispatch(setSushi())
       
    }, [] )

    
    return (
        <div className={mainstyles.contentWrap}>
           
           { isLoaded ? 
                 sushi.map( item => {
                    return <ProductCard id={item.id} key={item.id} name={item.name} img={item.img} price={item.price} descr={item.descr} rating={item.rating}> </ProductCard>
                })
                :
                null
           }
            
        </div>
    );
};

export default Sushi;