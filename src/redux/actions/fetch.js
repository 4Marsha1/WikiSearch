import axios from "axios"
import { FETCH_SEARCH_FAILED, FETCH_SEARCH_INITIATED, FETCH_SEARCH_SUCCESS } from "./types"

export const fetch = (keyword, count) => (dispatch) => {
    dispatch({
        type: FETCH_SEARCH_INITIATED,
    })
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${keyword}&gsrlimit=${count}&prop=pageimages|extracts&exintro&explaintext&exlimit=max&format=json&origin=*`)
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: FETCH_SEARCH_SUCCESS,
                payload: data.query.pages
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_SEARCH_FAILED,
                payload: error.message
            })
        })
} 