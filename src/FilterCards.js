// const router = express.Router();
//go through product collection in mongo and return all Cards with filterWord in description or title

const axios = require('axios');
let data = JSON.stringify({
  "searchTerm": "ju"
});

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/products',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});