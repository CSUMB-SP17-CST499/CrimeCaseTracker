import fetch from '../core/fetch';

export async function getUserCases(user){
  return fetch('/query', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'operation': 'userCases',
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

export async function getAllFromTable(table){
  table = "SELECT * FROM `" + table + "`";
  return fetch('/query', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'operation': 'allFromTable',
      table
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
};

export async function getCommentsByID(id){
  var table = "SELECT * FROM `comments` WHERE caseNumber = '" + id + "'";
  return fetch('/query', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'operation': 'allFromTable',
      table
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
};

export async function query(q){
  return fetch('/query', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'operation': 'allFromTable',
      q
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
};
