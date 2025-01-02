import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlantDetails } from '../services/plantService';

const PlantDetails = () => {
  const { plantName } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      const data = await getPlantDetails(plantName);
      setPlant(data);
    };
    fetchPlantDetails();
  }, [plantName]);

  return (
    <div>
      {plant ? (
        <div>
          <h2>{plant.name}</h2>
          <img src={plant.image.value} alt={plant.name} />
          <p>{plant.description.value}</p>
          <a href={plant.url} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlantDetails;
