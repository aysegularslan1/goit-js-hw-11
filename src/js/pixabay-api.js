import axios from 'axios';

const API_KEY = "50461526-1c4ae7086be4914a89297c276";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits; // eklendi
  } catch (error) {
    throw new Error("API isteği başarısız: " + error.message);
  }
}
