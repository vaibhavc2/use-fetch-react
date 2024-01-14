import { fetchOptions as options } from "../constants/index";

export const fetchUrl = async (url: string, fetchOptions: any = options) => {
  return new Promise((resolve, reject) =>
    fetch(url, fetchOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return reject(res);
      })
      .then((data) => {
        if (data) {
          resolve(data);
          return data;
        }
      })
      .catch((error) => {
        reject(error);
      })
  );
};
