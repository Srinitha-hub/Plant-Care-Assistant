import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const searchPlants = async (query) => {
  try {
    const response = await axios.get(`https://api.plant.id/v2/identify`, {
      params: { query },
      headers: {
        'Api-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching plant data:", error);
    return [];
  }
};

export const searchPlantsByImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post('https://api.plant.id/v2/identify', formData, {
      headers: {
        'Api-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error identifying plant from image:", error);
    return null;
  }
};

export const getPlantDetails = async (plantName) => {
  try {
    const response = await axios.get(`https://api.plant.id/v2/plants/${plantName}`, {
      headers: {
        'Api-Key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching plant details:", error);
    return null;
  }
};
