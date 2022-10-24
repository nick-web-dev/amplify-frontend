export default ({ $axios }) => {
  console.log("here");
  return $axios.get("/lang/js/en.js").then((response) => {
    return response.data;
  });
};
