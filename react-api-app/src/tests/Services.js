export const FetchData = () => {
  return fetch('http://localhost:3000/lord-of-the-rings.json').then((res) => {
    return res.json();
  });
};
