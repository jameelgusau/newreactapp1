import { NEW_POST, FETCH_POST } from './types'

export const fetchPosts =()=>dispatch => {
  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(posts=>dispatch({
        type: FETCH_POST,
        payload: posts
    }))
}

export const createPost =(postData)=>dispatch => {
    console.log('actionCalled')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        
        headers: {
            'content-type': 'application/json',
            'mode' :'no-cors'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json())
        .then(post=>dispatch({
        type: NEW_POST,
        payload: post
    }))

}

