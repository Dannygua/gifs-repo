import React from 'react'


export const getGifs = async(category)=>{
       
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=pyBW8ojV3CG1yGAMwgU4GAMtVFLeP9Om`//alt96
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        }            
    )
    return gifs //funciones async retornan una promesa 
}