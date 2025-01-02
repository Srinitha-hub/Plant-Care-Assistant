import React, { useState } from 'react';
import { searchPlantsByImage } from '../services/plantService';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [plantData, setPlantData] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await searchPlantsByImage(image);
    setPlantData(data);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload Image</button>
      
      {plantData && (
        <div className="plant-info">
          <img src={plantData.image.value} alt={plantData.name} />
          <h3>{plantData.name}</h3>
          <p>{plantData.description.value}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
