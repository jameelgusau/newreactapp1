import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from './actions/postAction'

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }
    render() {
        const postItems = this.props.posts.map(post=> (
     
            <div className="ui segments" key={post.id}>
                <div className="ui segment">
                    <p>{post.title}</p>
                </div>
                <div className="ui secondary segment">
                <p>{post.body}</p>
                </div>
            </div>

        ))
        return (
            <div>
               {postItems}
            </div>
        );
    }
}

Posts.propTypes={
    fetchPosts: PropTypes.func.isRequired,
   
}
const mapStateToProps= state =>({
    posts: state.posts.items
})
export default connect(mapStateToProps, { fetchPosts })(Posts);