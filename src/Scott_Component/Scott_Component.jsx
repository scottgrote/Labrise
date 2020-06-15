


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
