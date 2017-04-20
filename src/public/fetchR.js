import fetch from '../core/fetch';

module.exports = async function getReports(fileR, query){
  return fetch('/casesModel', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'fileR': fileR,
      'query': query
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.reports;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
};
