
"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as resultModalEventActions from '../_actions/resultModalEventActions';
import ResultModalRender from './ResultModalRender';

const ResultModalContainer = (props) => {

    useEffect(() => {
        const { actions } = props;
        actions.readResultModalInfo();
    }, [] );
    return(
        <div>
            <ResultModalRender {...props} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        resultModalData: state.resultModalReducer.resultModalData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(resultModalEventActions, dispatch)
    }
}

ResultModalContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(ResultModalContainer);
