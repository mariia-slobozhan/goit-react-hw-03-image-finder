import axios from "axios";

export default function handleRequest(query, page) {
  axios.defaults.baseURL = "https://pixabay.com/api/";
  const key = "23875883-62ec2e0d3177fc3e314277236";
  const parameters = `?key=${key}&q=${query}&per_page=12&image_type=photo&orientation=horizontal`;
  return axios
    .get(parameters + `&page=${page}`)
    .then((images) => {
      if (images.data.hits.length > 0) {
        return images;
      }
      return Promise.reject(
        new Error("Can not find any photos for your request")
      );
    })
    .catch((error) => {
      return error;
    });
}
