import { NEW_POST, FETCH_POST } from '../components/actions/types'

const intialState ={
    items: [],
    item: {}
}

export default function(state=intialState, action){
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            console.log('New post')
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}