import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types'

function Provider({children}) {
    const [order,setOrder] = useState([])
    const [ordersDone,setOrdersDone] = useState([])
    const [mesa,setMesa] = useState([])
    const [tables,setTables] = useState([])

    const value = {
        order,
        setOrder,
        ordersDone,
        setOrdersDone,
        mesa,
        setMesa,
        tables,
        setTables
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