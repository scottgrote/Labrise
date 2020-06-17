"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const ResultModalRender = ({ resultModalData }) => {
    console.log("debugxx"+JSON.stringify(resultModalData));

    function createTabRow(resultModalsData){
        return (
            <tr >
                <td> {resultModalsData.name} </td>
                <td> {resultModalsData.min} </td>
                <td> {resultModalsData.max} </td>
                <td> {resultModalsData.value} </td>
                <td> {resultModalsData.flag} </td>
                <td> {resultModalsData.units} </td>
            </tr>
        );
    }

    let content = '';

    if(!resultModalData || resultModalData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
    //console.log("debugxxxx67"+JSON.stringify(patInfoData));

    if(resultModalData && resultModalData.requestSucessful){
        content = 
        (
        <div>
            <table className="table">
            
            <thead>
                <tr>
                    <th>Order Date: {resultModalData.resultModal.orderDate}</th>
                    <th>Patient: {resultModalData.resultModal.patient}</th>
                    <th>Doctor: {resultModalData.resultModal.doctor}</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Value</th>
                    <th>Flag</th>
                    <th>Units</th>
                    
                </tr>
            </thead>
            <tbody>
                {resultModalData.resultModal.labResults.map((resultModalsData) => createTabRow(resultModalsData))}
            </tbody>    
        </table>
        <button>close modal</button>
        </div>)

    }

    if(resultModalData && resultModalData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        
    return(
        <div>
            <h1>RESULTMODAL</h1>
            {content}
        </div>
    );
}

ResultModalRender.propTypes = {
    resultModalData: PropTypes.object
};

export default ResultModalRender;