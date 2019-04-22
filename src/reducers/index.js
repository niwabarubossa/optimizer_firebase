import { combineReducers } from 'redux'
import firebase from './firebase'
import { reducer as form } from 'redux-form'

export default combineReducers({ firebase, form })