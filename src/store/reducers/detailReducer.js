import { CHANGE_INGREDIENT_DATA, CHANGE_STEPS_DATA, CHANGE_DETAIL_DATA, CHANGE_ID_DATA } from '../constants'
import { dummyData } from '../dummyData'

const stateData = {
  detailData: dummyData.data,
  stepsData: [],
  ingredientsData: [],
  id: ''
}

export default function detailReducer(state = stateData, action) {
  switch (action.type) {
    case CHANGE_INGREDIENT_DATA :
      return {
        ...state,
        ingredientsData: action.payload.extendedIngredients
      }
    case CHANGE_DETAIL_DATA :
      return {
        ...state,
        detailData: action.payload
      }
    case CHANGE_STEPS_DATA :
      return {
        ...state,
        stepsData: action.payload[0].steps
      }
    case CHANGE_ID_DATA :
      return {
        ...state,
        id: action.payload
      }
    default:
      return state
  }
}