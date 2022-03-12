import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [first, setfirst] = useState('')
    const HandleInputChange = (e) => {
        setfirst(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() //evita que se recarge al dar enter
        if (first.trim().length >2) {
            setCategories(cats => [first,...cats])
            setfirst('');
        }
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={first}
                    onChange={HandleInputChange}

                />
            </form>
        </>

    )
}

AddCategory.prototype={
    setCategories:PropTypes.func.isRequired
}