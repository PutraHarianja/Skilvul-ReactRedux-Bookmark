import React from "react";
import ListBookmark from "./ListBookmark";
import ListCard from "./ListCard";


export default function Homepage() {
    return (
        <React.Fragment>
            <ListCard />
            <ListBookmark />
        </React.Fragment>
    )
}