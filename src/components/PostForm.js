import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from './actions/postAction'

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: '',
            body: ''
        }
        this.onChange =this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit(e){
        e.preventDefault()
        
        const post={
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
    }
    render() {
        return (

            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" onChange={this.onChange} value={this.state.title} />
                </div>
                <div className="field">
                    <label>Body</label>
                    <textarea name='body' rows="2" onChange={this.onChange} value={this.state.body}/>
                </div>
    
                <button className="ui button" type="submit">Submit</button>
            </form>
            
        );
    }
}
PostForm.propTypes ={
    createPost : PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);