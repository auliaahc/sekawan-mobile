import axios from "axios";
const url = "https://jsonplaceholder.typicode.com";

export const fetchComments = async (id) => {
  try {
    const response = await axios.get(`${url}/posts/${id}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
