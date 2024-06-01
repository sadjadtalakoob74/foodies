'use client';

import React, {useRef, useState} from 'react';
import classes from "./image-picker.module.css";
import Image from "next/image";


function ImagePicker({label, name}) {
    const imageInput = useRef()
    const [pickedImage, setPickedImage] = useState()

    function handleImageChange(event) {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)

    }

    function handlePickClick() {
        imageInput.current.click();
    }

    return (<div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} alt='selected image by user' fill/>}
            </div>
            <input className={classes.input} type="file" id={name} accept="image/*" name={name} ref={imageInput}
                   onChange={handleImageChange}/>
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick an image</button>
        </div>

    </div>);
}

export default ImagePicker;