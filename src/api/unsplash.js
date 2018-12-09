 import axios from 'axios';

 export default axios.create({
 	baseURL: 'https://api.unsplash.com',
 	headers:{
 				Authorization: 
 				'Client-ID 7ab028311218165224df157f6d8e85a87e1eb9395f59c488e5da94a0f4718538'
 			}
});