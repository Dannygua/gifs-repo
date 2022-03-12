import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifDridItem from './GifDridItem';

export const GifGrid = ({ category }) => {

    //const [count, setCount] = useState(0)

    const { data:images /*alias*/, loading } = useFetchGifs( category );


    /* const [images, setImages] = useState([])
    useEffect(() => {//SOLO SE DISPARA UNA SOLA VEZ CON EL ARREGLO (SEGUNDO PARAMETRO DEL USEEFECT)
        getGifs(category).then(setImages); //solo se ejecuta por una unica vez
    }, [category]) */

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn' >{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className='card-grid'>



                {
                    images.map(img => ( //() usas parentesis para retornos implicitos
                        <GifDridItem
                            key={img.id}
                            {...img} /> //pasar las propiedades como props
                    ))
                }

                {/* <h2>{count}</h2>
        <button onClick={()=>setCount(count +1)} ></button> */}

            </div>
        </>
    )
}
