"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const PatEventRender = ({ patInfoData }) => {
    //console.log("debugxx"+JSON.stringify(patInfoData));

    function createPatRow(patsInfo){
        return (
            <tr key={patsInfo.invoice_ID}>
                <td> {patsInfo.date} </td>
                <td> {patsInfo.id} </td>
                <td> {patsInfo.results} </td>
            </tr>
        );
    }

    let content = '';

    if(!patInfoData || patInfoData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
    //console.log("debugxxxx67"+JSON.stringify(patInfoData));

    if(patInfoData && patInfoData.requestSucessful){
        content = 
        (<table className="table">
            <thead>
                <tr>
                    <th>date</th>
                    <th>ID</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {patInfoData.patInfo.map((patsInfo) => createPatRow(patsInfo))}
            </tbody>    
        </table>)
        //console.log("debugxxxxinsdie"+patInfoData.requestSucessful);
        /*patInfoData=/*{"patInfo":[{"date":"03-04-1997","id":"ABC-1","results":"passed"},{"date":"03-04-1876","id":"ABC-1","results":"passed"},{"date":"03-04-2022","id":"ABC-1","results":"passed"}],"requestSucessful":true}*/
         /*           [
        {
            "date": "03-04-1997",
            "id": "ABC-1",
            "results": "passed"
        },
        {
            "date": "10-25-2000",
            "id": "ABC-12",
            "results": "passed"
        },
        {
            "date": "03-04-2005",
            "id": "ABC-3",
            "results": "failed"
        },
        {
            "date": "03-04-1997",
            "id": "ABC-1",
            "results": "passed"
        }
       ];
        let x=[];
        for(var i=0;i<4;i++){
                x[i]=<tr>
                   <td>{patInfoData[i].date}</td>
                   <td>{patInfoData[i].id}</td>
                   <td>{patInfoData[i].results}</td>
                 </tr>
                }
        content = 
            (
                 <table border="1">
                   <tbody>
                    <tr>
                      <th>Date</th>
                      <th>ID</th>
                      <th>Results</th>
                    </tr>
                   {x}
                   </tbody>
                 </table>)*/
    }

    if(patInfoData && patInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        
    return(
        <div>
            <h1>PatInfo</h1>
            {content}
        </div>
    );
}

PatEventRender.propTypes = {
    PatInfoData: PropTypes.object
};

export default PatEventRender;
