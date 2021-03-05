import React, { useState } from "react"

const DRAGGABLE = "DRAGGABLE";
const BAR = "BAR";

function draggable(item, id) {
    return {
        type: DRAGGABLE,
        id,
        data: item
    };
}

function insertBars(list) {
    let i = 0;

    const newBar = () => {
        return {
            type: BAR,
            id: i++
        }
    }

    return [newBar()].concat(
        ...list.map(item => {
            return [draggable(item, i++), newBar()]
        })
    )
}


export default function useDraggable(list) {

    const [dragList, setDragList] = useState(() => {
        return insertBars(list);
    })
    const [dragOver, setDragOver] = useState(null);
    const [dragging, setDragging] = useState(null);

    return {
        dragList,
        createDropperProps: id => {
            return {
                dragging,
                dragOver,
                eventHandlers: {
                    onDragOver: e => {
                        e.preventDefault();
                        setDragOver(id)
                    },
                    onDragLeave: e => {
                        e.preventDefault();
                        setDragOver(null)
                    }
                }
            }
        },
        createDraggerProps: id => {
            return {
                id,
                key: id,
                dragging,
                eventHandlers: {
                    onDragStart: () => {
                        setDragging(id)
                    },
                    onDragEnd: () => {
                        setDragging(null)
                    }
                }
            }
        }
    }
}