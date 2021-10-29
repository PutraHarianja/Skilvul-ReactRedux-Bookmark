export const ADD_BOOKMARK = "ADD_BOOKMARK"

// ID, TITLE
export const add_bookmark = ({id, title, body}) => ({
    type: ADD_BOOKMARK,
    payload: {id, title, body},
    data: ""
});



