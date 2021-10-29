import React from "react";
import Card from "./Card";




export default function ListCard() {
    let state = [
        {
            id: 1,
            title: "Bookmark #1",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure, asperiores a sequi, soluta voluptas eum ipsa ipsum molestiae sit laborum velit recusandae pariatur eaque deserunt autem tempore magnam eos inventore? Porro, omnis? Molestiae molestias provident excepturi non, eaque, tempore magnam nobis atque voluptatum laudantium debitis, deleniti doloremque accusantium consequatur?"
        },
        {
            id: 2,
            title: "Bookmark #2",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure, asperiores a sequi, soluta voluptas eum ipsa ipsum molestiae sit laborum velit recusandae pariatur eaque deserunt autem tempore magnam eos inventore? Porro, omnis? Molestiae molestias provident excepturi non, eaque, tempore magnam nobis atque voluptatum laudantium debitis, deleniti doloremque accusantium consequatur?"
        },
        {
            id: 3,
            title: "Bookmark #3",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure, asperiores a sequi, soluta voluptas eum ipsa ipsum molestiae sit laborum velit recusandae pariatur eaque deserunt autem tempore magnam eos inventore? Porro, omnis? Molestiae molestias provident excepturi non, eaque, tempore magnam nobis atque voluptatum laudantium debitis, deleniti doloremque accusantium consequatur?"
        }
    ]


    return (
        <React.Fragment>
            {state.map((item) => {
                return <Card data = {item} />
            })}
            {/* <Card /> */}
        </React.Fragment>
    )
}