"use client";
import Image from "next/image";
import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();
      setImageUrl(`/uploads/${data.filename}`);
      console.log("Image uploaded successfully:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
      {imageUrl && (
        <Image
          width={200}
          height={200}
          unoptimized={true}
          src={imageUrl}
          alt="Uploaded Image"
        />
      )}
    </form>
  );
}

export default ImageUpload;
