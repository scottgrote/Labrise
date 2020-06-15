"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const PatEventRender = ({ patInfoData }) => {

 

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
    

    if(patInfoData && patInfoData.requestSucessful){
        patInfoData=[
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
                 </table>)
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
