const apiUrl = 'https://api.metalpriceapi.com/v1/latest';
const apiKey = 'de656c8964b7f39b7e1a9e4bb7b4faf8';

 fetch(apiUrl, {
   method: 'GET',
   headers: {
      'Api-Key': apiKey
   }
 })
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));