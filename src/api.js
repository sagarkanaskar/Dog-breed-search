import axios from "axios";

export const apiGetAllDogBreedsSearch = (propval) => {
  try {
    if (propval === "") {
      return axios.get("https://api.thedogapi.com/v1/breeds");
    } else {
      return axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${propval}`
      );
    }
  } catch (e) {
    console.log("err", e.message);
  }
};
