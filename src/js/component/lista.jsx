import React from "react";



const Lista = ({ history, borrar }) => {

    const renderList = () => {

        return history.length != 0 ? history.map((h, index) => { return <li className="list-group-item mt-2" key={index}>{h.label}<button type="button" className="btn-close" aria-label="Close" onClick={() => borrar(h)}></button></li> }) : ""
    }

    return (
        <ul className="list-group ">
            {renderList()}
        </ul>)





}
export default Lista