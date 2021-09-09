import Axios from 'axios'

export const apiMiddleware = store => next => async action => {
  if(action.async){
    if(action.detailPage){
      const { data } = await Axios({
        method: 'get',
        url: action.url
      })
      console.log(data)
      if(typeof action.type == 'object'){
        for(let i = 0; i < action.type.length; i++){
          next({type: action.type[i], payload:data})
          console.log(action.type[i])
        }
      }
      else{
        next({ type: action.type, payload:data})
      }
    }
    else{
      next(action)
    }
  }
  else{
    next(action)
  }
}