import React from 'react'
import ActualPost from './ActualPost'
import { connect } from 'react-redux'

const ActualPostList = ({posts}) => {
    posts.map(posts => <ActualPost {...posts}/>) 
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => {
    return {
        createPost: postList => dispatch(createPost(postList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActualPostList)