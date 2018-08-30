import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE
} from "../actions/PageActions"


const initialState = {
    year: 2015,
    photos: [],
    isFetching: false,
    error: ""
}

export default function pageReducer(state=initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return {...state, isFetching: true, year: action.payload, error: ""}
        case GET_PHOTOS_SUCCESS:
            return {...state, isFetching: false, photos: action.payload, error: ""}
        case GET_PHOTOS_FAILURE:
            return {...state, error: action.payload.message, isFetching:false}
        default:
            return state
    }
}
