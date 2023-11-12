import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:3000/api',
  responseType:'json'
});

export default api;


// loadProducts = async () => {
//     try {
//         const response = await api.get('/findItemById/651a0776dd20690d6d98555b/');
//         const { name } = response.data;
//         console.log(name);
//     } catch(err) {
//         console.error(err);
//     }
// };

// postProducts = async () => {
    
//     api.post('/createItem',{
//         "name": name, 
//         "price": price,
//         "ingredients": {ingredients}
//     })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
// };