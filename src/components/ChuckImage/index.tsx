import React, {useEffect, useState} from 'react';
import {ChuckNorris} from "./styles";
import Chuck from "./../../assets/chuk.svg";
import {Image } from "react-konva";


export const ChuckImage = () => {
    const [image, setImage] = useState<any>(null)

    useEffect (()=> {
        const loadedImage = new window.Image();
        loadedImage.src = Chuck;
        loadedImage.onload = () => {
            setImage(loadedImage)
        }
    }, [])

    return <Image image={image} width={500} height={650} x={50} y={50}/>
}
