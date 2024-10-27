import axios from "axios";

export const fetchData = async (query: string, page = 1) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=SGR-b_RMZ6ScDLeVlF4_miV43r2BL_2fZC8eKwByhiA",
    {
      params: {
        query,
        per_page: 12,
        page,
      },
    }
  );
  return response.data;
};