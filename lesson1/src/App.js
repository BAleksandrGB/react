
import React, { useState } from 'react'
import { Counter } from './components/Counter'
import { Massage } from './components/Massage'
import './App.css';



const App = () => {
    const  [messageList, setMessageList]  = useState([])

    const initMassageList = (value) => {
        setMessageList((messageList) => (
            { text: value, author: '' }
        ))

        console.log(messageList);


    }
    return (
        <>
            <Massage msList={initMassageList} />
            <Counter />
        </>
    )
}

export default App