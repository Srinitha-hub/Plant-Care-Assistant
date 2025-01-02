import React, { useEffect, useState } from 'react';
import { searchPlants } from '../services/plantService';
import PlantCard from '../components/PlantCard';
import ImageUpload from '../components/ImageUpload';

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await searchPlants('aloe');
      setPlants(data);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h2>Plants List</h2>
      <div className="grid grid-cols-3 gap-4">
        {plants.map((plant) => (
          <PlantCard key={plant.entity_id} plant={plant} />
        ))}
      </div>

      <h2>Search by Image</h2>
      <ImageUpload />
    </div>
  );
};

export default Home;
