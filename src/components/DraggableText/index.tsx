import React, {useState} from "react";
import {Text} from "react-konva";

type DraggableTextProps = {
    text: string
}

export const DraggableText = ({text}: DraggableTextProps) => {
    const [x, setX] = useState(50)
    const [y, setY] = useState(50)
    const [isDragging, setIsDragging] = useState(false)

    return (
        <Text
        text={text}
        x={x}
        y={y}
        width={200}
        draggable
        fill={isDragging ? 'green' : 'black'}
        onDragStart={() => {
          setIsDragging(true)
        }}
        onDragEnd={(e) => {
          setIsDragging(false)
          setX(e.target.x())
          setY(e.target.y())
        }}
      />
    )
}