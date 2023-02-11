import React, { Component } from 'react'
import gif from './g0R9.gif'
import './loading.css'
export class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={gif} alt="Loading..." />
            </div>
        )
    }
}

export default Loading