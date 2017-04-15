import fetch from '../core/fetch';

module.exports = async function getUserCases(user){
  return fetch('/casesModel', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': user
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.cases;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
};