import axios from "axios";
import { Authorization } from "../../util/api";
import { Params } from "./types";

export async function getPhotos({ per_page }: Params) {
  return await axios
    .get(`https://api.pexels.com/v1/search?query=nature&per_page=${per_page}`, {
      headers: { Authorization },
    })
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}
