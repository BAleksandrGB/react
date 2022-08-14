import React from "react";
import { AUTHOR,BOT } from "./bd";

export const Massage = ({ author, text,id }) => {

    const authorType = author === AUTHOR ? AUTHOR : BOT

    return (
        <div className={`massag ${authorType}`}>
            <span className='text'><span>от:{authorType}</span>
                <span>сообщение:{text}</span></span>
        </div>
    )
}