import React from "react";
import { useSelector } from "react-redux";


export default function ListBookmark() {
    const selector = useSelector(state => state.bookmark)
    console.log(selector);


    return (
        <React.Fragment>
            <h1>Bookmark List</h1>
            <ul>
                {selector.map((item) => {
                    return <li>{item.title}</li>
                })}
            </ul>
        </React.Fragment>
    )
}