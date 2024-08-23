import React, { useState } from 'react'
import { apiRoot } from '../../RathamaAPIConfig';
import CardCreatorForm from '../../components/CardCreatorForm';


const CardCreator = props => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formattedJson = {}

        const response = await fetch(`${apiRoot}/cards`, {
            headers:{
                "Content-Type": 'application/json',
                Accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify(formattedJson)
        })
    }


    return <div>
        <CardCreatorForm onSubmit={handleSubmit}/>
    </div>
}

export default CardCreator