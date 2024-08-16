"use client";
import { useRef, useState } from "react";
import styles from "./pick-image.module.css";
import Image from "next/image";
const ImageSelected = () => {
  const [pickedImage, setPickedImage] = useState(null);
  const uploadRef = useRef(null);
  const handleClick = () => {
    uploadRef.current.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <>
      <label htmlFor="image">Upload Image</label>
      <input
        style={{ display: "none" }}
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleChange}
        ref={uploadRef}
        required
      />
      <div className={styles.pickedImage} onClick={handleClick}>
        {!pickedImage ? (
          "No Image Uploaded yet"
        ) : (
          <Image src={pickedImage} alt="image" fill objectFit="cover" />
        )}
      </div>
    </>
  );
};

export default ImageSelected;
