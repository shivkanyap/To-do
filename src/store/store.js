import {createStore} from 'redux'
import getreducer from '../reducers/getreducer'
const store=createStore(getreducer)
export default store