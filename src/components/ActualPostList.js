import React from 'react'
import ActualPost from './ActualPost'
import { connect } from 'react-redux'

const ActualPostList = ({posts}) => (
    posts.map(posts => 
        <ActualPost
            key={posts.id} {...posts}/>)
)

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, null)(ActualPostList)