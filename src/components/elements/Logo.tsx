import React, { useState } from 'react'

interface Prop {
    logonName:string
}

export default function Logo({logonName}:Prop) {
    const [logoname,setLogoName] = useState(logonName.split(""));
    const [newName, setNewName] = useState(["_"])

    /*
    Первый и предпоследний элементы найти по Ref ссылке, повесить анимацию набора ькучив купсиврм - последним элементом
    создать еще одно состояние в котором будет формироваться массив набранного текста.
    */ 

  return (
    <div className='logo'>
        {
            logoname.map((el,idx)=>{
                return (<span key={idx}>{el}</span>)
            })
        }
    </div>
  )
}
