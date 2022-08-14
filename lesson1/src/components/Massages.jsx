import React from 'react'
import {Massage} from './Massage'


export const Massages=({massageList})=>{

    return (
        <div className="listMassage">
            {
                massageList.map((massage)=>
                <Massage key={massage.id} {...massage}/>
                )
                
            }
        </div>

    )
}

Massages.defaultProps={
    massageList:[]
}