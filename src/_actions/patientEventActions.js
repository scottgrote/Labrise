import axios from 'axios'

import { READ_PATINFO_SUCCESFUL, READ_PATINFO_FAILURE, READ_PATINFO_PENDING} from '../_constants/patEventConstants';

export const readPatInfo = () => {
  return dispatch => {
      dispatch(_readPatInfoStarted());

      return axios.get(`https://run.mocky.io/v3/56d11790-ed77-473e-bf4b-b8be591e33f9`)//make my mocky
      .then(res => {
          dispatch(_readPatInfoSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_readPatInfoFailed(error));
      });


  };
}

const _readPatInfoSuccess = (res) => {
    return {
        type: READ_PATINFO_SUCCESFUL,
        data:  res.data
    };
}

const _readPatInfoFailed = (error) => {
    return {
        type: READ_PATINFO_FAILURE,
        error  
    };
}

const _readPatInfoStarted = () => {
    return {
        type: READ_PATINFO_PENDING
    };
}