const REACT_APP_EMAIL_API = import.meta.env.VITE_EMAIL_URL;
export const emailRequest = async (url, options = {}) => {
  url = `${REACT_APP_EMAIL_API}${url}`;
  return await request(url, options);
};

const request = async (url, options = {}) => {
  const originFetch = fetch;
  fetch = async (url, options) => {
    try {
        const response = await originFetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        return error;
    }
  };


  return await fetch(url, options);
  
};
