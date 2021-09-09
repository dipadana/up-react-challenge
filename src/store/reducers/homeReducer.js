import { CHANGE_FETCH_DATA } from '../constants'

const stateData = {
  fetchData: []
}

export default function homeReducer(state = stateData, action) {
  switch (action.type) {
    case CHANGE_FETCH_DATA :
      return {
        ...state,
        fetchData: action.data
      }
    default:
      return state
  }
}