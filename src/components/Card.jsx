import React from "react";
import { useDispatch } from "react-redux";
import { add_bookmark } from "../store/actions";




export default function Card(props) {
    const dispatch = useDispatch()

    const handleClick = (data) => {
        dispatch(add_bookmark(data))
    }   

    return (
        <React.Fragment>
            <h3>{props.data.title}</h3>
            <p>{props.data.body}</p>
            <button onClick= {() => handleClick(props.data)}>Bookmark</button>
        </React.Fragment>
    )
}