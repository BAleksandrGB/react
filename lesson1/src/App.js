
import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Massages } from './components/Massages';
import { AUTHOR,BOT } from './components/bd';
import './App.css';

let timer;

const App = () => {
    const [massageList, setMassagList] = useState([])

    useEffect((author)=>{
        if(massageList[massageList.length-1]?.author === AUTHOR){

            clearTimeout(timer)
            timer = setTimeout(() => {
                setMassagList((prevList)=>([
                    ...prevList,
                    {
                        author: BOT,
                        text:'Привет я робот.И пока ничего не умею! ;0)',
                        id: 'bot'+ prevList.length
                    }
                ]))
            }, 1500);
        }

        return ()=>{
            clearTimeout(timer)
        }
    },[massageList])

    const handlerSendMassage = (msg) => {
        setMassagList((prevList) => (
            [
                ...prevList,
                {
                    author: AUTHOR,
                    text: msg,
                    id: prevList.length
                },
            ]
        ))
    }


    return (
        <div className="chat">
            <Massages massageList={massageList} />
            <Form onSendMassag={handlerSendMassage} />
        </div>
    )
}

export default App