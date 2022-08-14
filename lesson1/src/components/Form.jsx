import React, { useState } from "react";

export const Form = ({ onSendMassag }) => {

    const [massage, setMassage] = useState('')//объявление состояния для пеедачи его в value в инпут.Передаётся в useState строка, потому что в инпуте в value содержится значение в виде строки

    const handlerChenge = (e) => {
        setMassage(e.target.value);
    }

    return (
        <div className="form">
            <input type="text" value={massage} onChange={handlerChenge} />
            <button className='btn' onClick={()=>{onSendMassag(massage);setMassage('')}}>Отправить</button>
        </div>
    )
}