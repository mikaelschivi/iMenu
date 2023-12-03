import React from 'react';
import { View} from "react-native";
import { useEffect,useState, useContext} from 'react';
import AppContext from '../context/AppContext';
import propTypes from 'prop-types'

export default function Prato ({data}) {
    const {order} = useContext(AppContext)

    return (
        <View >
            { order.map((order) => <PratoItems key={order.id} data={order}/>)}
        </View>
    );
}