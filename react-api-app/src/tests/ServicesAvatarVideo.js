export const FetchData = () => {
  return fetch('http://localhost:3000/avatar-video.json').then((res) => {
    return res.json();
  });
};
