export const URL = "https://jsonplaceholder.typicode.com/users";
export const getUsersList = async () => {
  let response = await fetch(URL);
  let payload = await response.json();

  return {
    type: "LIST",
    payload,
  };
};

export const getUserDetails = async (id) => {
  let response = await fetch(`${URL}/${id}`);
  let payload = await response.json();

  return {
    type: "DETAILS",
    payload,
  };
};
