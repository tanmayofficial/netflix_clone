import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});
// .then(response => { 
// 	console.log(response)
// })
// .catch(error => {
//     console.log(error.response)
// });

export default instance;