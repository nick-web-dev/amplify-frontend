export default ({ $axios }) => {
  return $axios.get("/lang/js/en.js").then((response) => {
    return response.data;
  });
};
