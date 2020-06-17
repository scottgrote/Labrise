import axios from 'axios'

import { READ_RESULTMODAL_SUCCESFUL, READ_RESULTMODAL_FAILURE, READ_RESULTMODAL_PENDING} from '../_constants/resultModalConstants';

export const readResultModalInfo = () => {
  return dispatch => {
      dispatch(_readResultModalStarted());

      return axios.get(`https://run.mocky.io/v3/ed355249-a8ef-4fe0-b33b-84b64af9e5f1`)//make my mocky::this is the mockyi hope to pull soon https://run.mocky.io/v3/cef3ed5f-991f-4e51-8302-77575e97828a
      .then(res => {
          dispatch(_readResultModalSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_readResultModalFailed(error));
      });


  };
}

const _readResultModalSuccess = (res) => {
    return {
        type: READ_RESULTMODAL_SUCCESFUL,
        data:  res.data
    };
}

const _readResultModalFailed = (error) => {
    return {
        type: READ_RESULTMODAL_FAILURE,
        error  
    };
}

const _readResultModalStarted = () => {
    return {
        type: READ_RESULTMODAL_PENDING
    };
}