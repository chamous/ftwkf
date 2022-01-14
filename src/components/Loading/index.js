import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';
const LoadingComponent = ({message}) => {
    return (
        <div className="loading">
            <ReactLoading type={"bubbles"} color={"#EC4F30"} height={120} width={120}/>
            <span>{message}</span>
        </div>
    )
}

export default LoadingComponent
