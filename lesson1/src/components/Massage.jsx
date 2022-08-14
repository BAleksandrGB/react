import React, { useState, Component } from "react";

export class Massage extends React.Component {
    constructor(props) {
        super(props)
        this.msValue = ''
        this.state = {
            massage: '',
            author: ''
        }
        this.render()
    }

    mass() {
        this.setState({
            massage: this.msValue,
            author: ''
        })
    }



    render() {
        return (
            <>
                <input type="text" value={this.msValue} onChange={mass()} />
                <button className="btnMass">Сообщение</button>
            </>
        )
    }

}