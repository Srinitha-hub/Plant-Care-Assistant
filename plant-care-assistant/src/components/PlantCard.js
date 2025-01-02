import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ plant }) => {
  return (
    <div className="card p-4 border rounded-lg shadow-md">
      <img src={plant.image.value} alt={plant.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl mt-2">{plant.name}</h3>
      <p>{plant.description.value.slice(0, 100)}...</p>
      <Link to={`/plant/${plant.name}`} className="text-blue-500 hover:text-blue-700">See details</Link>
    </div>
  );
};

export default PlantCard;
