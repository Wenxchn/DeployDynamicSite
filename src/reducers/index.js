import { combineReducers } from 'redux'
import setIntroDescription from './introduction'
import setIntroImage from './introductionImage'
import createPost from './posts'

export default combineReducers({
    description: setIntroDescription,
    image: setIntroImage,
    posts: createPost
})