import Axios from 'axios'
import Swal from 'sweetalert2'

export const fetchDataProcess = (keyword) => async dispatch => {
  Swal.showLoading()
    try{
      const { data } = await Axios({
        method: 'get',
        url: `https://api.spoonacular.com/recipes/search?query=${keyword}&number=20&apiKey=d598a559515f48bc958bc745e593f373`
      })
      dispatch({
        type:'CHANGE_FETCH_DATA', data:data.results
      })
      Swal.close()
    }
    catch(err){
      console.log(err.response)
    }
}

export const fetchStepsDataProcess = (data) => {
  return {
    ...data,
    async: true,
    detailPage: true,
    type: 'CHANGE_STEPS_DATA'
  }
}

export const fetchDetailDataProcess = (data) => {
  return {
    ...data,
    async: true,
    detailPage: true,
    type: ['CHANGE_DETAIL_DATA','CHANGE_INGREDIENT_DATA']
  }
}