import { READ_RESULTMODAL_SUCCESFUL, READ_RESULTMODAL_PENDING, READ_RESULTMODAL_FAILURE } from '../_constants/resultModalConstants';

export default function resultModalReducer(state = {}, action) {
  switch (action.type) {
    case READ_RESULTMODAL_SUCCESFUL:
      return {...state, resultModalData: { resultModal: action.data, requestSucessful: true } };
    case READ_RESULTMODAL_PENDING:
      return {...state, resultModalData: {requestPending: true } };
    case READ_RESULTMODAL_FAILURE:  
      return {...state, resultModalData: { requestFailed: true } };
    default:
      return state;
  }
}