import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'

function Provider({children}) {
    const [order,setOrder] = useState([])

    const value = {
        order,
        setOrder
    }

    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider

Provider.propTypes = {
    children: propTypes.any
}.isRequired