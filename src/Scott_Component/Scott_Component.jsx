


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as patientEventActions from '../_actions/patientEventActions';
import PatEventRender from './patEventRender';

const PatEventContainer = (props) => {

    useEffect(() => {
        const { actions } = props;
        actions.readPatInfo();
    }, [] );
    //console.log("debugrory"+JSON.stringify(props));
    //console.log("debugrory1"+JSON.stringify(props.patInfoData));
    //console.log("debugrory2"+JSON.stringify(typeof props.patInfoData));
   
    return(
        <div>
            <PatEventRender {...props} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        patInfoData: state.patEventReducer.patInfoData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(patientEventActions, dispatch)
    }
}

PatEventContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(PatEventContainer);
