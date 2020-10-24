import React from 'react'
import ActualPost from './ActualPost'
import { connect } from 'react-redux'
import { createPost } from '../actions'

const ActualPostList = ({posts}) => (
    posts.map(posts => 
        <ActualPost
            key={posts.id} {...posts}/>)
)

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => {
    return {
        createPost: posts => dispatch(createPost(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActualPostList)