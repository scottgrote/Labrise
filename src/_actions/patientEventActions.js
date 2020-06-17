import axios from 'axios'

import { READ_PATINFO_SUCCESFUL, READ_PATINFO_FAILURE, READ_PATINFO_PENDING} from '../_constants/patEventConstants';

export const readPatInfo = () => {
  return dispatch => {
      dispatch(_readPatInfoStarted());

      return axios.get(`https://run.mocky.io/v3/ccc4e315-c250-4fc0-bea9-617680645599`)
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
    //console.log("debug:" +res.data[1]);
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